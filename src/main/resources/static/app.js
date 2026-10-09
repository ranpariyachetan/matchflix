class MatchflixApp {
    constructor() {
        this.movies = moviesData;
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchResults = document.getElementById('searchResults');
        this.searchResultsSection = document.getElementById('searchResultsSection');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.featuredMovies = document.getElementById('featuredMovies');
        this.allMovies = document.getElementById('allMovies');

        // Modal elements
        this.modal = document.getElementById('movieModal');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalClose = document.getElementById('modalClose');
        this.modalMoviePoster = document.getElementById('modalMoviePoster');
        this.modalMovieTitle = document.getElementById('modalMovieTitle');
        this.modalMovieYear = document.getElementById('modalMovieYear');
        this.modalMovieDescription = document.getElementById('modalMovieDescription');
        this.modalSimilarMovies = document.getElementById('modalSimilarMovies');

        // Create a movie lookup map for quick access
        this.movieMap = {};
        this.movies.forEach(movie => {
            this.movieMap[movie.title.toLowerCase()] = movie;
        });

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderFeaturedMovies();
        this.renderAllMovies();
    }

    setupEventListeners() {
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });
        this.clearSearchBtn.addEventListener('click', () => this.clearSearch());

        // Modal event listeners
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());

        // Prevent modal closing when clicking on modal content
        this.modal.querySelector('.modal-content').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    renderFeaturedMovies() {
        const featured = this.movies.slice(0, 8);
        this.featuredMovies.innerHTML = featured.map(movie => this.createMovieCard(movie)).join('');
        this.attachMovieCardListeners(this.featuredMovies);
    }

    renderAllMovies() {
        this.allMovies.innerHTML = this.movies.map(movie => this.createMovieCard(movie)).join('');
        this.attachMovieCardListeners(this.allMovies);
    }

    createMovieCard(movie) {
        const hasPoster = movie.poster && movie.poster.startsWith('http');
        const posterHtml = hasPoster
            ? `<img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" onerror="this.style.display='none'; this.parentElement.querySelector('.movie-poster-fallback').style.display='flex';">`
            : '';
        const fallbackHtml = `<div class="movie-poster-fallback" style="background: ${movie.gradient}; display: ${hasPoster ? 'none' : 'flex'};"><div class="movie-poster-title">${this.escapeHtml(movie.title)}</div></div>`;

        return `
            <div class="movie-card" data-title="${this.escapeHtml(movie.title)}">
                <div class="movie-poster">
                    ${posterHtml}
                    ${fallbackHtml}
                </div>
                <div class="movie-badge">${movie.year}</div>
                <div class="movie-info">
                    <div class="movie-title">${this.escapeHtml(movie.title)}</div>
                    <div class="movie-year">${movie.year}</div>
                </div>
            </div>
        `;
    }

    attachMovieCardListeners(container) {
        const cards = container.querySelectorAll('.movie-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                this.openMovieModal(title);
            });
        });
    }

    async handleSearch() {
        const query = this.searchInput.value.trim();

        if (!query) {
            this.searchResultsSection.classList.add('hidden');
            return;
        }

        this.searchResults.innerHTML = '<div class="loading"></div>';
        this.searchResultsSection.classList.remove('hidden');

        try {
            const response = await fetch(`/movies/search?query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Search failed');

            const results = await response.json();
            this.displaySearchResults(results);
        } catch (error) {
            console.error('Error searching movies:', error);
            this.searchResults.innerHTML = '<div class="no-results">Error searching. Please try again.</div>';
        }
    }

    displaySearchResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="no-results">No movies found. Try a different search.</div>';
            return;
        }

        // Convert API results to movie cards with poster info
        const movieCards = results.map(result => {
            // Find matching movie from our data to get poster and year
            const movieData = this.movieMap[result.title.toLowerCase()] || {};
            const movieWithPoster = {
                title: result.title,
                description: result.description,
                year: movieData.year || 'N/A',
                poster: movieData.poster,
                match: result.match
            };
            return movieWithPoster;
        });

        const html = movieCards.map(movie => {
            const gradient = movie.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            const hasPoster = movie.poster && movie.poster.startsWith('http');
            const posterHtml = hasPoster
                ? `<img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" onerror="this.style.display='none'; this.parentElement.querySelector('.movie-poster-fallback').style.display='flex';">`
                : '';
            const fallbackHtml = `<div class="movie-poster-fallback" style="background: ${gradient}; display: ${hasPoster ? 'none' : 'flex'};"><div class="movie-poster-title">${this.escapeHtml(movie.title)}</div></div>`;

            return `
                <div class="movie-card" data-title="${this.escapeHtml(movie.title)}">
                    <div class="movie-poster">
                        ${posterHtml}
                        ${fallbackHtml}
                    </div>
                    <div class="movie-badge">${(movie.match * 100).toFixed(1)}%</div>
                    <div class="movie-info">
                        <div class="movie-title">${this.escapeHtml(movie.title)}</div>
                        <div class="movie-year">${movie.year}</div>
                    </div>
                </div>
            `;
        }).join('');

        this.searchResults.innerHTML = html;
        this.attachMovieCardListeners(this.searchResults);
    }

    clearSearch() {
        this.searchInput.value = '';
        this.searchResultsSection.classList.add('hidden');
        this.searchResults.innerHTML = '';
    }

    openMovieModal(title) {
        const movie = this.movieMap[title.toLowerCase()];

        if (!movie) {
            console.error('Movie not found:', title);
            return;
        }

        // Populate movie details
        const hasPoster = movie.poster && movie.poster.startsWith('http');
        if (hasPoster) {
            this.modalMoviePoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}" class="modal-poster-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;" onerror="this.style.display='none'; this.parentElement.style.background='${movie.gradient}'; this.parentElement.innerHTML=\`<div class='movie-poster-title'>${this.escapeHtml(movie.title)}</div>\`;">`;
        } else {
            this.modalMoviePoster.style.background = movie.gradient;
            this.modalMoviePoster.innerHTML = `<div class="movie-poster-title">${this.escapeHtml(movie.title)}</div>`;
        }
        this.modalMovieTitle.textContent = movie.title;
        this.modalMovieYear.textContent = movie.year;
        this.modalMovieDescription.textContent = movie.description;

        // Clear previous similar movies
        this.modalSimilarMovies.innerHTML = '<div class="loading"></div>';

        // Show modal
        this.modal.classList.remove('hidden');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Fetch similar movies
        this.fetchSimilarMoviesForModal(title);
    }

    async fetchSimilarMoviesForModal(title) {
        try {
            const response = await fetch(`/movies/${encodeURIComponent(title)}/similar`);
            if (!response.ok) throw new Error('Failed to fetch similar movies');

            const results = await response.json();
            this.displaySimilarMoviesInModal(results);
        } catch (error) {
            console.error('Error fetching similar movies:', error);
            this.modalSimilarMovies.innerHTML = '<div class="no-results">Error loading similar movies.</div>';
        }
    }

    displaySimilarMoviesInModal(results) {
        if (results.length === 0) {
            this.modalSimilarMovies.innerHTML = '<div class="no-results">No similar movies found.</div>';
            return;
        }

        // Convert API results to movie cards with poster info
        const movieCards = results.map(result => {
            const movieData = this.movieMap[result.title.toLowerCase()] || {};
            const movieWithPoster = {
                title: result.title,
                description: result.description,
                year: movieData.year || 'N/A',
                poster: movieData.poster,
                match: result.match
            };
            return movieWithPoster;
        });

        const html = movieCards.map(movie => {
            const gradient = movie.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            const hasPoster = movie.poster && movie.poster.startsWith('http');
            const posterHtml = hasPoster
                ? `<img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" onerror="this.style.display='none'; this.parentElement.querySelector('.movie-poster-fallback').style.display='flex';">`
                : '';
            const fallbackHtml = `<div class="movie-poster-fallback" style="background: ${gradient}; display: ${hasPoster ? 'none' : 'flex'};"><div class="movie-poster-title">${this.escapeHtml(movie.title)}</div></div>`;

            return `
                <div class="movie-card" data-title="${this.escapeHtml(movie.title)}">
                    <div class="movie-poster">
                        ${posterHtml}
                        ${fallbackHtml}
                    </div>
                    <div class="movie-badge">${(movie.match * 100).toFixed(1)}%</div>
                    <div class="movie-info">
                        <div class="movie-title">${this.escapeHtml(movie.title)}</div>
                        <div class="movie-year">${movie.year}</div>
                    </div>
                </div>
            `;
        }).join('');

        this.modalSimilarMovies.innerHTML = html;
        this.attachModalSimilarMovieListeners();
    }

    attachModalSimilarMovieListeners() {
        const cards = this.modalSimilarMovies.querySelectorAll('.movie-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                this.openMovieModal(title);
            });
        });
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MatchflixApp();
});
