import './App.css';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import AllPost from './pages/AllPost'
import NavBar from './components/NavBar'
import SinglePost from './pages/SinglePost'
import {Route,Redirect} from 'react-router-dom'
import {useState, useEffect} from'react'
import axios from 'axios';

// console.log(process.env.REACT_APP_BACKEND_URL);


function App() {

  const [user, setUser] =useState({})

  const verifyUser = () => {
    if (!localStorage.getItem('userId')) {return}

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`,{
      headers: {
        Authorization: localStorage.getItem('userId')
      }
    })
    .then((response)=>{ setUser(response.data.user)})
  }
  useEffect(verifyUser, [])

  return (
    <div className='mainDiv'>
      <NavBar 
      user={user}
      setUser={setUser}/>
      <hr></hr>
      <Route
      path='/'
      exact
      render={()=>{
        return<Home/>
      }}
      />

      <Route
      path ='/login'
      render={()=>{
        return<Login setUser={setUser}/>
      }}
      
      />      
      
      <Route
      path='/singup'
      render={()=>{
        return <Singup setUser={setUser}/>
      }}
      />


      {/* <Route
      path='/profile'
      render={()=>{
        return<Profile
        user={user} setUser={setUser}
        />
      }}
      /> */}

      <Route 
      path="/profile" 
      render={() => {
            if (user.id) {
              return <Profile 
              user={user} setUser={setUser}/>
            } else {
              return <Redirect to="/login" />
            }
      }} /> 
      
      {/* <Route
      path='/posts'
      exact
      render={()=>{
        return<CreatePost
        user={user}/>
      }}
      /> */}

      <Route 
      path="/posts" 
      exact
      render={() => {
            if (user.id) {
              return <CreatePost 
              user={user}/>
            } else {
              return <Redirect to="/login" />
            }
      }} /> 

      {/* <Route
      path='/allpost'
      render={()=>{
        return <AllPost
        user={user} setUser={setUser}/>
      }}
      /> */}

      <Route 
      path="/allpost" 
      render={() => {
            if (user.id) {
              return <AllPost 
              user={user} setUser={setUser}/>
            } else {
              return <Redirect to="/login" />
            }
      }} /> 
      

      {/* <Route
      path='/posts/:id'
      exact
      render ={(data)=>{
        return<SinglePost
        id={data.match.params.id}
        />
      }}
      /> */}
      
       <Route 
      path="/posts/:id" 
      exact
      render={(data) => {
            if (user.id) {
              return <SinglePost 
              id={data.match.params.id}/>
            } else {
              return <Redirect to="/login" />
            }
      }} /> 
      
     
    </div>
  );
}

export default App;
