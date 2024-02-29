import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [provider,setProvider]=useState({})
  const getMovie = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c8b80cb9f3caf84aec1bd0cf0c4b1125`)
    const data = response.data
    setMovie(data)
    console.log(data)
  }
  const getProviders = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c8b80cb9f3caf84aec1bd0cf0c4b1125`)
    const data = response.data.results.US
    setProvider(data)

  }

  useEffect(() => {
    getMovie()
    getProviders()
  },)
  
  return (
    <div className='text-white text-4xl py-32 px-16 flex justify-center items-center gap-10 flex-col md:flex-row'>
      <div className=''>
        <img className='w-[350px] h-[400px] md:w-[500px] md:h-[600px] object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}></img>
      </div>
      <div className='flex flex-col items-center justify-start gap-5 w-2/4'>
        <h1 className='text-white text-2xl md:text-4xl '>{movie.title}</h1>
        <p className='text-gray-400 text-lg md:text-xl'>{movie.overview}</p>
        <h2 className='text-xl md:text-2xl text-gray-200'>Date: {movie.release_date}</h2>
        <h2 className='text-lg md:text-xl text-gray-400'>Language: {movie.original_language}</h2>
        <h1 className='text-lg md:text-xl text-gray-200'>Production Companies :</h1>
        <div className='flex justify-center items-center gap-6 flex-wrap '> {movie.production_companies?.map((company) => {
          return <div className='flex justify-center items-center gap-2'>
            <img className={`w-[70px] h-[50px] md:w-[80px] md:h-[60px] ${company.logo_path===null?"hidden":"block"}`} src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} alt="" />
          </div>
        })}
        </div>
        <div className='flex justify-center items-center gap-4'>
          <h3 className='text-xl md:text-2xl text-gray-200'>Rate: {movie.vote_average}</h3>
          <FaRegStar size={25} className=" text-yellow-200" />
        </div>
        <Link to={provider.link}>
        <button className='px-2 py-2 mt-10 rounded-lg bg-red-500 text-lg text-white hover:bg-red-300 hover:text-black'>Watch now</button>
        </Link>
      </div>
      
    </div>
  )
}

export default MovieDetails