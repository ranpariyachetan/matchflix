# TMDB Poster Setup Guide

This script fetches real movie poster URLs from The Movie Database (TMDB) and updates your `movies-data.js` file.

## Prerequisites

- **Node.js** (v12+) - [Download here](https://nodejs.org/)
- **TMDB API Key** - Get it free at [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

## Steps

### 1. Get Your TMDB API Key

1. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Create an account if you don't have one
3. Request an API key (you'll need to agree to the terms)
4. Copy your **API Key** (v3 Auth)

### 2. Run the Script

From the project root directory, run one of these commands:

**Option A: Pass API key as argument**
```bash
node fetch-tmdb-posters.js YOUR_API_KEY_HERE
```

**Option B: Set environment variable**
```bash
export TMDB_API_KEY=YOUR_API_KEY_HERE
node fetch-tmdb-posters.js
```

**Example:**
```bash
node fetch-tmdb-posters.js "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI..."
```

### 3. What Happens

The script will:
- ✅ Read your movies list
- 🔍 Search TMDB for each movie
- 🖼️ Download poster URLs
- 💾 Update `src/main/resources/static/movies-data.js`
- 📊 Show you a summary of results

### 4. Review Results

The script will output something like:
```
🎬 Matchflix - TMDB Poster Fetcher

📁 Reading movies from: src/main/resources/static/movies-data.js
✅ Found 30 movies

🔍 Fetching poster URLs from TMDB...

✅ [1/30] Interstellar (2014) - Found
✅ [2/30] Gravity (2013) - Found
✅ [3/30] The Martian (2015) - Found
...
📊 Results: 29 success, 1 failed

💾 Writing updated data to file...
✅ Successfully updated src/main/resources/static/movies-data.js

🎉 Done! You can now run your application.
```

### 5. Run Your Application

```bash
./mvnw clean package
java -jar target/matchflix-0.0.1-SNAPSHOT.jar
```

Then open: **http://localhost:8080**

## Troubleshooting

**Script doesn't run:**
- Make sure you have Node.js installed: `node --version`
- Check you're in the project root directory

**"API key not provided" error:**
- Copy your actual TMDB API key
- Make sure there are no extra spaces

**"Not found on TMDB" errors:**
- Some movies might not be in TMDB database
- Check if the title/year is correct
- You can manually add poster URLs for missing ones

**"No poster available" warning:**
- TMDB doesn't have a poster for that movie
- The gradient placeholder will be used instead (which looks good!)

## What Gets Updated

Before:
```javascript
{
  title: "Interstellar",
  description: "...",
  year: 2014,
  gradient: "linear-gradient(...)"
}
```

After:
```javascript
{
  title: "Interstellar",
  description: "...",
  year: 2014,
  poster: "https://image.tmdb.org/t/p/w500/...",
  gradient: "linear-gradient(...)"
}
```

The app will use real posters when available, and fall back to gradients if not!

## Need Help?

- TMDB API Docs: https://developers.themoviedb.org/3
- Get API Key: https://www.themoviedb.org/settings/api
