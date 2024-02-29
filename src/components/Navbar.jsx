import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { NotAuthentication } from '../store/slices/AuthSlice';
import { auth } from '../firebase/config';
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [dispalyName, setDispalyName] = useState('')
    const [displayLog, setDisplayLog] = useState(false)
    const Navigate = useNavigate()
    const dispatch =useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setDispalyName(user.email)
            
        } else {
            setDispalyName('')
        }
});
    },[])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ?setIsActive(true):setIsActive(false)
        })
    }, [])
    
    const signOutHandler = () => {
        signOut(auth).then(() => {
            setDisplayLog(false)
            dispatch(NotAuthentication())
            Navigate('/signin')

})
    }
    useEffect(()=>{signOutHandler()},[])
return (
    <header className={`${isActive? "bg-black/80 shadow-lg" :"bg-transparent"} flex justify-between items-center px-6 py-4 w-full fixed  z-10`}>
        <Link to='/'> <h1 className='text-red-500 font-bold text-2xl md:text-4xl cursor-pointer '>Movie App</h1></Link>
        <div className='flex justify-between items-center gap-4'>
            <Link to='/favourite'>
                <FaRegHeart size={35} className='text-red-500'></FaRegHeart>
            </Link>
            {dispalyName === '' && <FaRegUser size={25} className="text-gray-400/60" />}
            {dispalyName !== '' && <div className=' m-2 flex flex-col justify-center items-center relative '>
            <button onClick={()=>{setDisplayLog(!displayLog)}} className='text-white  text-xl font-semibold bg-gray-400/60 rounded-full px-2 py-1 text-center '>{dispalyName.slice(0,1).toUpperCase()}</button>
            <span onClick={signOutHandler} className={`${displayLog ? "block":"hidden"} duration-20 absolute mt-20 bg-gray-400/60 hover:bg-black  text-white w-[50px] md:w-[70px] px-2 py-2 rounded cursor-pointer`}>Logout</span>
            </div> }
            <Link to='/signin'><button className='bg-red-500 text-white px-4 py-2 mr-2 rounded hover:bg-white hover:text-red-500'>Sign In</button></Link>
            <Link to ='/signup'><button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-white hover:text-red-500'>Sign Up</button></Link>
        </div>
        
</header>
)
}

export default Navbar