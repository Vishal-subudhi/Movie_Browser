import MovieCard from "./MovieCard"

function MovieGrid({movies, favorites, onToggleFavorite}){
    if(!movies|| movies.length===0){
        return(
            <p className="text-gray-400 text-center mt-8">No Movies Found.</p>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg-grid-cols-4 gap-4">
            {movies.map(movie=>(
                <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                rating={movie.imdbRating}
                isFavorite={favorites.some(f=>f.id===movie.imdbID)}
                onToggleFavorite={onToggleFavorite}/>
            ))}    
        </div>
    )
}

export default MovieGrid