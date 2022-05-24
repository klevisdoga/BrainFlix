import Nav from '../Nav/nav';
import logo from '../../Assets/Logo/BrainFlix-logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            <Nav/>
        </header>
    )
}

export default Header