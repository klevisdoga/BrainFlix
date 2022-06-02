import { Link } from 'react-router-dom';
import pfp from '../../Assets/Images/Mohan-muruge.jpg';
import './nav.scss';

function Nav() {

    const submitHandler = (ev) => {
        ev.preventDefault()
    }

    return(
        <nav className="navbar">
            <form onSubmit={submitHandler} className="navbar__form">
                <input  className='navbar__form-search' type="text" id="searchBar" name="searchBar" placeholder="Search"/>
                <img src={pfp} alt="profile" className='navbar__form-pfp' />
                <Link to='/upload' className='navbar__button'>UPLOAD</Link>
            </form>
            
        </nav>
    )
}
export default Nav