import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav-wrapper'>
<Link to='/' className='nav-link'>
    <div>HOME</div>
</Link>
<Link to='/projects' className='nav-link'>
    <div>PROJECTS</div>
</Link>
    </div>
  )
}

export default Nav