import Nav from '../Nav/nav';
import logo from '../../Assets/Logo/BrainFlix-logo.svg';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to='/'><img className="header__logo" src={logo} alt="logo"/></Link>
            <Nav/>
        </header>
    )
}

export default Header