import {Link} from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../contexts/UserContext'


const NavBar = (props) => {
    // const [user, setUser] = useContext(UserContext)

    console.log(props);

    return(
        <div className='navBar'> 
            <Link className='navLink' to ='/'>Home</Link>
            {'    |    '}
        
        {props.user.id ?
        
            <>
                <span 
             className='logout'
                onClick={()=>{
                props.setUser({})
                localStorage.removeItem('userId')
                }}
               >Logout</span>
        
                {'    |    '}
                <Link className='navLink' to ='/profile'>Profile</Link>
                {'    |    '}
                <Link className='navLink' to='/posts'>Create Post</Link>
                {'    |    '}
                <Link className='navLink' to='/allpost'>All post!</Link>
            </>
          : 
          
          <>
            <Link className='navLink' to ='/login'>Login</Link>
            {'    |    '}
            <Link className='navLink' to='/singup'>Sing-Up</Link>
            {'    |    '}
          </>
          
          }
            
        
            
             
        
        </div>

    )
}

export default NavBar