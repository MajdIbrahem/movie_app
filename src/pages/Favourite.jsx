import {useSelector} from 'react-redux'
import { FaRegStar } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Favourite = () => {
    const {list}=useSelector((state)=>state.favourite) 
    return (
        <div className=' py-32 px-16 flex flex-col justify-center items-center gap-8'>
            <h1 className='text-white text-2xl md:text-4xl font-bold'>My Favourite</h1>
            <div className='flex items-center justify-center gap-6 flex-wrap '>
                {list.map((movie) => {
                    return  <div className="flex flex-col justify-center items-center w-[200px] h-[250px] md:w-[300px] md:h-[300px] relative group rounded">
        <div className='w-full h-full bg-gradient-to-r from-black absolute '></div>
        <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
        <div className="flex flex-col justify-center items-center gap-4 text-white absolute px-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 duration-300 ">
            <h1 className="text-lg md:tex-2xl font-semibold ">{movie?.title}</h1>
            <h2 className="text-gray-400">release_date: {movie?.release_date}</h2>
            <h3 className="flex justify-between items-center gap-2 text-sm md:text-lg  ">Rate : {movie?.vote_average} <FaRegStar size={25} className="text-gray-300" /></h3>
            <Link to={`/movie/${movie?.id}`}><button className="hover:scale-110 duration-300"><FaRegCirclePlay size={45} className='text-gray-300 hover:text-red-500' /></button></Link>
        </div>
        
            
        
</div>
                })}
            </div>
        </div>
    )
}

export default Favourite