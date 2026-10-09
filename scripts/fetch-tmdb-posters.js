#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

// Configuration
const TMDB_API_KEY = process.env.TMDB_API_KEY || process.argv[2];
const MOVIES_FILE = path.join(__dirname, 'src/main/resources/static/movies-data.js');
const API_BASE = 'https://api.themoviedb.org/3';
const DELAY_MS = 250; // Delay between requests to avoid rate limiting

if (!TMDB_API_KEY) {
    console.error('❌ Error: TMDB API key not provided');
    console.error('Usage: node fetch-tmdb-posters.js YOUR_API_KEY');
    console.error('Or set environment variable: export TMDB_API_KEY=your_key');
    process.exit(1);
}

// Helper function to make HTTPS requests
function fetchFromTMDB(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Matchflix' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error(`Failed to parse JSON: ${e.message}`));
                }
            });
        }).on('error', reject);
    });
}

// Sleep helper
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        console.log('🎬 Matchflix - TMDB Poster Fetcher\n');
        console.log(`📁 Reading movies from: ${MOVIES_FILE}`);

        // Read current movies data
        const fileContent = fs.readFileSync(MOVIES_FILE, 'utf-8');
        const moviesMatch = fileContent.match(/const moviesData = \[([\s\S]*?)\];/);

        if (!moviesMatch) {
            throw new Error('Could not find moviesData in file');
        }

        // Parse existing movies
        const moviesDataStr = `[${moviesMatch[1]}]`;
        let movies = eval(moviesDataStr);

        console.log(`✅ Found ${movies.length} movies\n`);
        console.log('🔍 Fetching poster URLs from TMDB...\n');

        let successCount = 0;
        let failureCount = 0;

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];
            const searchUrl = `${API_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}&year=${movie.year}`;

            try {
                const searchResult = await fetchFromTMDB(searchUrl);

                if (searchResult.results && searchResult.results.length > 0) {
                    const tmdbMovie = searchResult.results[0];

                    if (tmdbMovie.poster_path) {
                        movies[i].poster = `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}`;
                        console.log(`✅ [${i + 1}/${movies.length}] ${movie.title} (${movie.year}) - Found`);
                        successCount++;
                    } else {
                        console.log(`⚠️  [${i + 1}/${movies.length}] ${movie.title} - No poster available`);
                        failureCount++;
                    }
                } else {
                    console.log(`❌ [${i + 1}/${movies.length}] ${movie.title} - Not found on TMDB`);
                    failureCount++;
                }

                // Add delay to avoid rate limiting
                if (i < movies.length - 1) {
                    await sleep(DELAY_MS);
                }
            } catch (error) {
                console.log(`❌ [${i + 1}/${movies.length}] ${movie.title} - Error: ${error.message}`);
                failureCount++;
                await sleep(DELAY_MS);
            }
        }

        console.log(`\n📊 Results: ${successCount} success, ${failureCount} failed\n`);

        // Write updated movies data back to file
        console.log('💾 Writing updated data to file...');
        const updatedContent = generateMoviesDataFile(movies);
        fs.writeFileSync(MOVIES_FILE, updatedContent);

        console.log(`✅ Successfully updated ${MOVIES_FILE}\n`);
        console.log('🎉 Done! You can now run your application.\n');

    } catch (error) {
        console.error(`\n❌ Fatal Error: ${error.message}\n`);
        process.exit(1);
    }
}

function generateMoviesDataFile(movies) {
    const moviesJS = movies.map(movie => {
        const poster = movie.poster ? `"${movie.poster}"` : 'null';
        return `  {
    title: "${movie.title.replace(/"/g, '\\"')}",
    description: "${movie.description.replace(/"/g, '\\"')}",
    year: ${movie.year},
    poster: ${poster}${movie.gradient ? `,\n    gradient: "${movie.gradient}"` : ''}
  }`;
    }).join(',\n');

    return `const moviesData = [
${moviesJS}
];
`;
}

// Run the script
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
