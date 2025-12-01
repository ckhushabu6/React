import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
        <Link to='/home' style={{marginRight:"30PX"}}>Home</Link>
        <Link to='/about' style={{marginRight:"30PX"}}>About</Link>
        <Link to='/contact' style={{marginRight:"30PX"}}>Contact</Link>
        </>
    )
}
export default Navbar