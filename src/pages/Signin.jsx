import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch,useSelector } from 'react-redux'
import {Authentication} from '../store/slices/AuthSlice'
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state)=>state.auth)
    const submitHandler = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(Authentication())
            Navigate('/')
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
return (
    <div className='w-full h-screen relative'>
        <div className='absolute w-full h-full bg-black/50'>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[400px] h-[500px] md:w-[500px] md:h-[550px] mt-10 bg-black/80 rounded flex py-24 px-16 flex-col items-center justify-start gap-8 p-5' >
                    <h1 className='text-white text-2xl md:text-4xl font-bold '>Sign In</h1>
                    {!isAuth && <h1 className='text-lg text-red-500 md:text-lg'> You Must Signin First</h1>}
                    <form onSubmit={submitHandler} className='flex flex-col gap-8 w-full'>
                        <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' className='px-2 py-4 text-lg  bg-gray-600 rounded outline-0'></input>
                        <div className='w-full flex flex-col gap-1'>
                        <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Password' className='px-2 py-4 text-lg  bg-gray-600 rounded outline-0'></input>
                        <p className={`${password>8?"hidden ":"block"}text-sm md:text-base text-gray-400 duration-200`}>at Least 8 charts</p>
                        </div>
                        <button type='submit' className='bg-red-500 rounded w-full p-2 text-lg text-white'>Sign In</button>
                    </form>
                    <div className='flex justify-between items-center gap-7'>
                        <p className='text-lg text-gray-400'>craet a new account ?</p>
                        <Link to='/signup'><h4 className='text-lg text-white hover:text-red-500'>Sign Up</h4></Link>
                    </div>
                    <div className='text-lg text-red-500'>{ error}</div>
                </div>
            </div>
        </div>
        <img className='w-full h-full object-cover' src='https://ca-times.brightspotcdn.com/dims4/default/6a41a2c/2147483647/strip/true/crop/2527x3000+0+0/resize/1200x1425!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa1%2F40%2F7ecc38ab285a036f67801e448314%2Fe53811360eed4b8ba26b5f635d703a7c' alt='/'></img>
    </div>
)
}

export default Signin