function MovieCard({id,poster,title,rating,isFavorite,onToggleFavorite}){
    return(
    <div className="flex flex-col gap-3 bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform
    duration-300">
        <img src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={title}
            className="w-full h-64 object-cover object-top"
        />
        <div className="p-3 flex flex-col gap-2">
            <div className="flex justify-between items-start">
                <h4 className="text-white font-bold text-sm flex-1">{title}</h4>
                <button 
                onClick={()=>onToggleFavorite({id,poster_path:poster,title,vote_average:rating})}
                className="text-xl ml-2">
                {isFavorite ? "❤️" : "🤍"}
                </button>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-yellow-400 text-sm">⭐ {rating || "N/A"}</span>
                <a href={`https://www.imdb.com/title/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 text-xs hover:underline"
                    >
                    View →
                </a>
            </div>
        </div>
    </div>
)}

export default MovieCard