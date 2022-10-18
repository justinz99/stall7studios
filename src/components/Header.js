import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    const activeStyle = ({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : undefined
    }

    return (
        <Navbar className='header' expand='lg'>
            <Navbar.Brand href='/' className='nav-logo'>
                <img src={logo} alt='header logo' />
                <h2>Stall7 Studios</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='header-nav'>
                    <NavLink to='/ ' style={activeStyle}>home</NavLink>
                    <NavLink to='/work' style={activeStyle}>work</NavLink>
                    <NavLink to='/about' style={activeStyle}>about</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}