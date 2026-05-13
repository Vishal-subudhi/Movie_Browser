
function SearchSection({query,setQuery, onSearch}){
    return (
        <div className="flex flex-col items-center gap-4 py-10">
            <h1 className="text-4xl font-bold text-white">
                Browse Movies 🎬
            </h1>
            <div className="flex gap-2 w-full max-w-lg">
            <input 
                type="text" 
                placeholder="Search for a Movie.." 
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 bg-gray-800 text-white border-gray-600 focus:outline-none 
                focus:border-red-500"
            />
            {query &&(
                <button onClick={()=>setQuery("")} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
                    Clear
                </button>
            )}
            </div>
            <p className="text-gray-400 text-sm">
                {query ? `Searching for "${query}"...`:"Showing popular movies"}
            </p>
        </div>
    )
}

export default SearchSection