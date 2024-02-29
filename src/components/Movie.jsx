import { FaRegStar } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../store/slices/FavouriteSlice";
import { useState } from "react";

const Movie = ({ movie }) => {
    const { backdrop_path, title, release_date, vote_average, id } = movie
    const { isAuth } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [added,setAdedd]=useState(false)
return (
    <div className="flex flex-col justify-center items-center w-[200px] h-[250px] md:w-[300px] md:h-[300px] relative group rounded">
        <div className='w-full h-full bg-gradient-to-r from-black absolute '></div>
        <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title}></img>
        <div className="flex flex-col justify-center items-center gap-4 text-white absolute px-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 duration-300 ">
            <h1 className="text-lg md:tex-2xl font-semibold ">{title}</h1>
            <h2 className="text-gray-400">release_date: {release_date}</h2>
            <h3 className="flex justify-between items-center gap-2 text-sm md:text-lg  ">Rate : {vote_average} <FaRegStar size={25} className="text-gray-300" /></h3>
            {isAuth ? <Link to={`/movie/${id}`}><button className="hover:scale-110 duration-300"><FaRegCirclePlay size={45} className='text-gray-300 hover:text-red-500' /></button></Link>
                    :<Link to={`/signin`}><button className="hover:scale-110 duration-300"><FaRegCirclePlay size={45} className='text-gray-300 hover:text-red-500' /></button></Link>}            
        </div>
        {isAuth && <button onClick={() => {
            dispatch(add(movie))
            setAdedd(true)
        }} className="absolute top-0 right-0 p-2 hover:scale-110 duration-300 opacity-0 group-hover:opacity-100 outline-0 "><FaRegHeart size={35} className={ `${added ? "text-red-500" :"text-gray-500"} hover:text-red-500`} /></button>}
        
</div>
)
}

export default Movie