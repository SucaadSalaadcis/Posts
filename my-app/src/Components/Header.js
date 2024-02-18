import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='conta'>
       <nav className='navbar'>
        <h1  className="hea1" style={{marginTop: '20px'}}>Suad Blog</h1>
        <div >
          <Link to='/' className='links'>Home</Link>
          <Link to='/create' className='link2'>New Post</Link>
          {/* <a href='/'>Home</a> */}
        </div>
       </nav>
    </div>
  )
}

export default Header