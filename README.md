# Movie Browser 🎬

A React movie browsing app that lets you search for movies, view details, and save favorites — powered by the OMDB API with localStorage persistence.

## Features
- Search movies by name with live results (updates as you type)
- Movie cards with poster, title, rating, and IMDB link
- Add/remove favorites with ❤️ heart button
- Favorites persist across page refreshes (localStorage)
- Empty state when no movies found
- Clear button to reset search
- "Showing popular movies" default state
- Responsive grid layout (2/3/4 columns)
- Dark theme UI

## Tech Stack
- React + Vite
- Tailwind CSS v3
- OMDB API (Open Movie Database)
- localStorage API

## How to run
1. Clone the repo
2. Run `npm install`
3. Get a free API key at [omdbapi.com](https://www.omdbapi.com/)
4. Create a `.env` file in the root:
```
VITE_OMDB_API_KEY=your_api_key_here
```
5. Run `npm run dev`

## Component Structure
```
App (query state + favorites state)
  ├── Navbar
  ├── SearchSection (live search input + clear button)
  ├── MovieGrid (maps movies → MovieCard)
  │     └── MovieCard (poster, title, rating, heart, IMDB link)
  └── FavoritesSection (saved favorites grid)
        └── MovieCard (reused)
```

## Custom Hook
```js
// useMovies.js — abstracts all API fetching logic
const { movies, loading, error } = useMovies(query)
```
The hook fetches movies on every query change using `useEffect([query])`.
No query → searches "popular". With query → searches that term.

## Key Concepts Used
- **Custom hook (useMovies)** — extracts fetch logic out of App for cleaner code
- **Live search** — `useEffect` with `[query]` dependency triggers fetch on every keystroke
- **Favorites toggle** — `Array.some()` to check, `Array.filter()` to remove, spread to add
- **localStorage persistence** — `JSON.stringify` on save, `JSON.parse` on load
- **Optional chaining** — `rating?.toFixed()` protects against undefined ratings
- **Lazy useState initializer** — `useState(() => JSON.parse(localStorage.getItem("favorites") || "[]"))`

## API Used
[OMDB API](https://www.omdbapi.com/)
- Search: `GET https://www.omdbapi.com/?apikey=KEY&s=QUERY`
- Returns: `{ Search: [...movies], totalResults, Response }`

## Reflection
**Project:** Movie Browser
**Date completed:** 13/05/2026
**What I built:** A movie browsing app with live search, favorites, and localStorage persistence using the OMDB API
**Main concepts learned:** Custom hooks, live search with useEffect, favorites toggle with Array.some/filter, localStorage with JSON.stringify/parse
**What was hardest:** Recognising patterns from previous projects and adapting them — also debugging the TMDB region block and switching to OMDB
**What I'd do differently:** Use a better API with trending movies endpoint instead of searching "popular"
**Feature I added myself:** Favorites section with localStorage persistence
**Time taken:** 7 days

## Live Demo
[GitHub Repo](https://github.com/Vishal-subudhi/Movie_Browser)
