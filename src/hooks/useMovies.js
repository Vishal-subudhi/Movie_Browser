import {useState, useEffect} from "react"
import.meta.env.VITE_OMDB_API_KEY

function useMovies(query){
    const [movies, setMovies]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError] =useState(null)

    useEffect(()=>{

        const fetchData=async()=>{
        setLoading(true)
        setError(null)
        try{
        const searchTerm = query || "popular"
        const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`
        const response = await fetch(url)
        const data = await response.json()
            setMovies(data.Search || [])
        }catch (err){
            setError("Something went Wrong.Please try again")
        }finally{
            setLoading(false)
        }
        }
        fetchData()
    },[query])
    return {movies,loading,error}
}

export default useMovies
