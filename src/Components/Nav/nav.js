import pfp from '../../Assets/Images/Mohan-muruge.jpg';
import './nav.scss';

function Nav() {
    return(
        <nav className="navbar">
            <form className="navbar__form">
                <input className='navbar__form-search' type="text" id="searchBar" name="searchBar" placeholder="Search"/>
                <img src={pfp} alt="profile" className='navbar__form-pfp' />
                <a href='youtube.com' className='navbar__button'>UPLOAD</a>
            </form>
            
        </nav>
    )
}
export default Nav