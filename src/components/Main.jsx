import {useState,useEffect} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
const Main = () => {
    const key = 'c8b80cb9f3caf84aec1bd0cf0c4b1125'
    const api = {
    Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    }
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await axios.get(api.Popular)
        const data = response.data.results
        setMovies(data)
    }
    useEffect(() => {
        getMovies()
    }, [])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    console.log(movie)
return (
    <div className='w-full h-[550px] relative '>
        <div className='w-full h-full bg-gradient-to-r from-black absolute'></div>
        <img className='w-full h-[550px] object-cover z-10' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
        <div className='text-white absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-8 px-16'>
            <h1 className='text-4xl font-bold'>{movie?.title}</h1>
            <div className='flex justify-center items-center gap-4'>
                <Link to={`/movie/${movie?.id}`}>
                <button className='bg-white text-black text-lg font-semibold rounded border px-5 py-2'>Play</button>
                </Link>
                <button className='bg-transparent text-lg font-semibold rounded border px-5 py-2'>Watch Later</button>
            </div>
            <p className='text-lg font-semibold text-gray-400 mt-5'>{movie?.overview}</p>
        </div>
    </div>
)
}

export default Main