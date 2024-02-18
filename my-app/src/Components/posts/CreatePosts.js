import { Children, useState } from "react"

const CreatePosts = () => {
  const [title,setTitle] = useState("")
  const [url,setUrl] = useState("")
  const [body,setBody] = useState("")
  const [author,setAuthor] = useState("")

  const handleForm = (e) => {
    e.preventDefault()

   console.log(title)
   console.log(url)
   console.log(body)
   console.log(author)
  }
  
  return (

    <div className='container'> 
    <div className='row'>
        <div className='col'>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
        <h2 style={{fontWeight: 'bold' , textAlign: 'center'}}>Add New Post</h2>

        <form class="vh-70 gradient-custom" onSubmit={handleForm}>
            
            <div class="container py-1">
            <div class="row d-flex justify-content-center align-items-center ">
            <div class="col-12 col-md-8  col-xl-5">
            <div class="card text-dark border-radius: .3rem" style={{backgroundColor: 'orange'}}>
            <div class="card-body p-5 text-center">
                <div class=" mt-md-4 ">
                <label class="form-label" >Blog title :</label>
                <input type='text'class="form-control form-control-sm" required
                onChange={(e) =>{
                  setTitle(e.target.value)}}
                 value={title}/>
                <label class="form-label" >Blog Image :</label>

                <input type='url' required class="form-control form-control-sm"
                 onChange={(e) =>{
                  setUrl(e.target.value)}}
                 value={url}
                
                />
                <label class="form-label" >Blog body :</label>
                <textarea required rows={5} class="form-control form-control-lg" 
                 onChange={(e) =>{
                  setBody(e.target.value)}}
                 value={body}
                ></textarea>
                <label class="form-label" >Blog author :</label>
    
                <select   class="form-control form-control-sm"
                 onChange={(e) =>{
                  setAuthor(e.target.value)}}
                 value={author}
                >
                <option value="admin">admin</option>
                <option value="suu">suu</option>
                </select>
                <br></br>
          
                    <button class="btn btn-dark btn-lg px-5 " style={{color: 'orange'}} type="submit">Add Blog</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
  </form>
  <br></br>
        </div>
      </div>
    </div>
      

  )
}

export default CreatePosts