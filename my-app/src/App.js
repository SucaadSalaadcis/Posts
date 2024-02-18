import React from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import PostDetails from './Components/posts/PostDetails'
import CreatePosts from './Components/posts/CreatePosts'
function App() {

  return (
    <div >
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/post/:id' element={<PostDetails/>}></Route>
        <Route path='/create' element={<CreatePosts/>}></Route>
       </Routes>
    </div>
   
    
  )
}

export default App