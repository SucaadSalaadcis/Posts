import React from 'react'
import image from '../Images/7.jpg'
import  './PostDetails.css'
const PostDetails = () => {
  const handleDelete = () =>{
    console.log("Deleted")
  }
  return (
    <div className='con con2'>
        <div className='post_details_title'>
         <h1 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
         <button className='btn btn-danger' 
          onClick={handleDelete}
         >Delete</button>
        </div>
         <img 
         src='https://images.unsplash.com/photo-1618422168181-177d9d0a1fca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          className="post_details_img"/>
         <p className='Post_details_body'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br></br>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br>
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br> 
            It has survived not only five centuries,but also the leap into electronic typesetting,<br></br>
            </p>
    </div>
  )
}

export default PostDetails