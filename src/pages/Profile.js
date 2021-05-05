import {useState} from 'react'
import axios from 'axios'
const Profile = (props) =>{

    const [name,setName] = useState(props.user.name || '')
    const [email,setEmail] = useState(props.user.email || '')
    const [password, setPassword] = useState(props.user.password || '')

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/profile`, {name,email,password},{
            headers: {
                Authorization: props.user.id  
            }
        })
    }       
    


    return(
        <div>
          <div className='profileOne'>
               <h1>
                Hi ~! {props.user.name} 
                </h1>
              
                
          </div>
          
          <div className="profileTwo">
           <form className='singupform' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>name:</label>
                    <input id='name'   value={name}  onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='email'>E-mail:</label>
                    <input id='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input  type='password'id='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <input  className='btn' type='submit' value="UpDate"/>
                </div>
            </form>
          </div >
        </div>
    )
}

export default Profile