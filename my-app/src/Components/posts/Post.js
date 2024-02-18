
import {Link} from 'react-router-dom'
import './Post.css'
const Post = ({post,handleDelete}) => {
  return (
    <Link to={`/post/ ${post.id}` }>
    <div className="posts" >
        <div className="post">
         <img src={post.image} />
        </div>
        <div className="post_author" >By : {post.author? post.author : 'sara'}</div>
        <h3 className="text">{post.title}</h3>
        <button style={{
          backgroundColor :'orange',
          color: "black",
          padding: "7px",
          marginLeft: "90px",
          borderRadius: "5px",
          
          // border: none
        }}
        onClick={()=>handleDelete(post.id)}>Delete</button>
        <br></br>
    </div>
    </Link>

  )
}

export default Post