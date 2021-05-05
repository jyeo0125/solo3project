import axios from 'axios'
import {Link} from 'react-router-dom'

import{useEffect,useState} from 'react'



const AllPost = (props)=>{

    const [allpost, setAllpost] = useState([])
 

    const fetchPosts = () => {
       axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts/${localStorage.getItem('userId')}`,{
            headers:{
                Authorization:props.user.id
            }
        })
        .then((response)=>{
            // console.log(response.data.post);
            setAllpost(response.data.post)
        })
    }

    

    // const handleClick =(event)=>{
    //     event.preventDefault()
    //     console.log(event.target.value);
    // }
        useEffect(() => {fetchPosts()},[])
    
    
        // console.log(allpost);
    return(
        <ul className='allpostContainer'>
        {
           
          allpost && allpost.map((post)=>{
           return <li  key ={post.id}>
              <div className='postContainer'>
                  <label>Title:</label>
                  
               <Link to ={`/posts/${post.id}/`}>{post.title}</Link>
               
               <hr/>
               <label>Content:</label>
               {post.content}
               <hr/>
               <button id='delBtn'value={post.id} onClick={()=>{
                   axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/delete/${post.id}`,{
                       headers: {
                        Authorization: localStorage.getItem('userId')
                        }
                      })
               }} >Destroy</button>
                
              </div>
             
           </li>
           })
   
          
       }
        </ul>
    )
}

export default AllPost