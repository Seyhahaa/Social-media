import axios from 'axios'
import { useState } from 'react'
import { base_url } from '../base_url'
import { useAppDispatch } from '../redux/hook/hook'
import { setUser } from '../redux/slice/authSlice'


const Login = () => {

    const dispatch = useAppDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login = async ()=>{
        const data = {
            email,password
        }
        try{
            const response = await axios.post(base_url+"/auth/login", data)
            if(response.status === 200){
                
                localStorage.setItem('token',response.data.token); 
                if(localStorage.getItem('token')){
                    dispatch(setUser(response.data.user))
                }
            }
        }catch(err: any){
            alert(err.response.data.message)
        }
        }
   return (
    <div>
        <input type="text" placeholder='Email...' className='border' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login