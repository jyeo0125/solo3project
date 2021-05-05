import { useState } from 'react'
import axios from 'axios'

const SinglePost = (props) => {

    const[title,setTitle] = useState('')
    const[content,setContent] = useState('')
    

    const updateHelper = (e) => {
        e.preventDefault()
      
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/posts/${props.id}`,{title,content},{
            id:props.id
        }).then((response)=>{
            console.log(response);
        })
    }

    
    return(
        <div className='singleDiv'>
            <div>
                <h1>Edit Plz</h1>
                
            </div>





            <form className='createpostform' onSubmit={updateHelper}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' vlaue={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor='content'>Content:</label>
                    <input id='content' value={content} onChange={(e)=>{setContent(e.target.value)}} />
                </div>
                <div>
                    <input className='btn' type='submit' value="update"/>
                </div>
            </form>
        </div>
    )
}

export default SinglePost