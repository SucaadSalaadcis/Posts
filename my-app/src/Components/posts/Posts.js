import { useState,useEffect } from 'react'
import Post from '../posts/Post'
// import  '../Images'
const Posts = () => {

  let img1= 'https://images.unsplash.com/photo-1618422168181-177d9d0a1fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  let img2= 'https://images.unsplash.com/photo-1618422168181-177d9d0a1fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  let img3= 'https://images.unsplash.com/photo-1618422168181-177d9d0a1fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'

  const [posts,setPosts] =useState([
     {id : 1, title : "post title 1", body: "post body ...", image :img1, author:"suad" },
     {id : 2, title : "post title 2", body: "post body ...", image :img2, author:"admin" },
     {id : 3, title : "post title 3", body: "post body ...", image :img3,  }
  ])

  // useEffect(() =>{
  //  console.log("empy effects")
  // })


  const handleDelete =(id) =>{
    let curPosts = [...posts]
    let newposts= curPosts.filter((post) => post.id !== id)
    setPosts(newposts)
  }
  return (
    <div style={{display: 'flex', justifyContent: 'space-around' }}>
      {posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete}/>
      ))}
      {/* <Post/>
     <Post/>
     <Post/> */}
    </div>
  )
}

export default Posts