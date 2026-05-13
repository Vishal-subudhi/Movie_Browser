import MovieCard from "./MovieCard"

function FavoritesSection({favorites,onToggleFavorite}){

    if(favorites.length===0){
        return <p className="text-gray-400 text-center mt-8">You Dont have a Favorite Movie Yet, Click ❤️ to add some.</p>
    }

    return (
        <div className="mt-10">
            <h3 className="text-xl text-white font-bold">Your Favorite Movies{(favorites.length)}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg-grid-cols-4 gap-4">
            {favorites.map(favorite=>(
                <MovieCard 
                key={favorite.id}
                id={favorite.id}
                poster={favorite.poster_path}
                title={favorite.title}
                rating={favorite.vote_average}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                />
                
            ))}
        </div>   
        </div>
    )
}
    export default FavoritesSection