import {useState} from 'react'
import axios from 'axios'


const Singup = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {name,email,password})
    }

    return(
        <div className='singupDiv'>
            <form className='singupform' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>name:</label>
                    <input id='name' value={name}  onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='email'>E-mail:</label>
                    <input id='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <input className='btn' type='submit' value="Create Account"/>
                </div>
            </form>
        </div>
    )
}

export default Singup