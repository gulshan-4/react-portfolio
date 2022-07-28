import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin , faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ()=>{
    return (
        <div className='nav-bar'>
            <Link to='/' className='logo'>
                <img src={LogoS} alt='logo' />
                <img src={LogoSubtitle} className='sub-logo' alt='logo subtitle' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sachin-6b347120b">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://github.com/00sachin00">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=916280298413">
                        <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;