import React from 'react'
import Main from '../components/Main'
import {useState,useEffect,useRef} from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
const Home = () => {
    const [page, setPage] = useState(1)
    const key = 'c8b80cb9f3caf84aec1bd0cf0c4b1125'
    const api = {
        Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`,
        TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}`,
        Trending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`,
        Horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=${page}&include_adult=false`,
        Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page+1}`,
        }
    const [movies, setMovies] = useState([])
    const [sort,setSort]=useState("popular")
    const [filteredApi, setFilteredApi] = useState(api.Popular)
    const [loading, setLoading] = useState(false)
    const [disable,setdisable]=useState(false)
    const getMovies = async () => {
        switch(sort) {
            case "top_rated":
                setFilteredApi(api.TopRated)
                break;
            case "trending":
                setFilteredApi(api.Trending)
                break;
            case "horror":
                setFilteredApi(api.Horror)
                break;
            case "upcoming":
                setFilteredApi(api.Upcoming)
                break;
            default:
                setFilteredApi(api.Popular)
                }
        setLoading(true)
        const response = await axios.get(filteredApi)
        const data = response.data.results
        setMovies(data)
        setLoading(false)
        
    }
    useEffect(() => {
        getMovies()
        
    }, [filteredApi,sort,page])
    const Loading = () => {
        return (<>
            <div className='col-md-3 columns-sm-1'>
                <Skeleton height={300}></Skeleton>
            </div>
            <div className='col-md-3 columns-sm-1'>
                <Skeleton height={300}></Skeleton>
            </div>
            <div className='col-md-3 columns-sm-1'>
                <Skeleton height={300}></Skeleton>
            </div>
            <div className='col-md-3 columns-sm-1'>
                <Skeleton height={300}></Skeleton>
            </div>
        </>
    )
}
return (
    <div>
        <Main />
        <div className='py-5 mt-5 px-32 flex flex-col md:flex-row justify-between items-center gap-2'>
            <h1 className='text-white text-4xl font-bold'>{sort.toUpperCase()}</h1>
            <label className=' justify-center items-center relative '>
                    <span className='font-bold text-2xl text-white mr-2'>Sort by :</span>
                <select name='Sortby'
                    onClick={(e) => {
                        e.preventDefault();
                        const value = e.target.value
                        setSort(value)
                        setPage(1)
                    }}
                    className='rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0 '>
                        
                        <option value="popular">Popular</option>
                        <option value="top_rated">TopRated</option>
                        <option value="trending">Trending</option>
                        <option value="horror">Horror</option>
                        <option value="upcoming">Upcoming</option>
                        
                        </select>
                    </label>
        </div>
        <div className='px-16 py-8 flex items-center justify-center gap-6 flex-wrap '>
            {loading?<Loading></Loading>:movies?.map((movie) => {
            return <Movie movie={movie} key={movie.id}></Movie>
        })}
        </div>
        <div className='w-full flex justify-center items-center gap-4'>
            <button onClick={() => {
                setPage(page - 1)
                if (page < 2) {
                    setPage(1)
                    setdisable(true)
                }
            }} className={`${page === 1 ? "text-gray-500" : "text-red-500 "}`}
            disabled={page<2}><IoMdArrowRoundBack size={35} /></button>
            <span className=' text-red-500 p-4 text-2xl rounded-full '>{page }</span>
            <button><IoMdArrowRoundForward onClick={()=>{setPage(page+1)}} size={35}  className='text-red-500'/></button>
        </div>
    </div>
)
}

export default Home