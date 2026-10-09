class MatchflixApp {
    constructor() {
        this.movies = moviesData;
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchResults = document.getElementById('searchResults');
        this.featuredMovies = document.getElementById('featuredMovies');
        this.allMovies = document.getElementById('allMovies');

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
        this.searchInput.addEventListener('input', (e) => {
            if (e.target.value.trim() === '') {
                this.searchResults.classList.add('hidden');
            }
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
        return `
            <div class="movie-card" data-title="${this.escapeHtml(movie.title)}">
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22240%22><rect fill=%22%23333%22 width=%22160%22 height=%22240%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2212%22>${this.escapeHtml(movie.title)}</text></svg>'">
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
                this.showSimilarMovies(title);
            });
        });
    }

    async handleSearch() {
        const query = this.searchInput.value.trim();

        if (!query) {
            this.searchResults.classList.add('hidden');
            return;
        }

        this.searchResults.innerHTML = '<div class="loading"></div>';
        this.searchResults.classList.remove('hidden');

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

        const html = results.map(result => `
            <div class="search-result-item" data-title="${this.escapeHtml(result.title)}">
                <div class="search-result-title">${this.escapeHtml(result.title)}</div>
                <div class="search-result-description">${this.escapeHtml(result.description.substring(0, 100))}...</div>
                <span class="search-result-match">${(result.match * 100).toFixed(1)}% Match</span>
            </div>
        `).join('');

        this.searchResults.innerHTML = html;
        this.attachSearchResultListeners();
    }

    attachSearchResultListeners() {
        const items = this.searchResults.querySelectorAll('.search-result-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.dataset.title;
                this.showSimilarMovies(title);
            });
        });
    }

    async showSimilarMovies(title) {
        this.searchResults.innerHTML = '<div class="loading"></div>';
        this.searchResults.classList.remove('hidden');
        this.searchInput.value = title;

        try {
            const response = await fetch(`/movies/${encodeURIComponent(title)}/similar`);
            if (!response.ok) throw new Error('Failed to fetch similar movies');

            const results = await response.json();
            this.displaySearchResults(results);
        } catch (error) {
            console.error('Error fetching similar movies:', error);
            this.searchResults.innerHTML = '<div class="no-results">Error loading similar movies. Movie might not exist.</div>';
        }
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
