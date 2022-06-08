import Nav from '../Nav/Nav';
import logo from '../../Assets/Logo/BrainFlix-logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link to='/'><img className="header__logo" src={logo} alt="logo" /></Link>
            <Nav />
        </header>
    )
}
