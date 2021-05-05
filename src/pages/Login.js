import {useState} from 'react'
import axios from 'axios'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {email,password})
        .then ((response)=>{
            console.log(response.data.user);
            props.setUser(response.data.user)
            localStorage.setItem('userId',response.data.user.id)
        })
    }

    return(
        <div className='loginDiv'>
            <form className='loginform' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='emailone'>E-mail:</label>
                    <input id='emailone' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='passwordone'>Password:</label>
                    <input id='passwordone' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <input className='btn' type='submit' value='Login' />
                </div>

            </form>
        </div>
    )
}

export default Login