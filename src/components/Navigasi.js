import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigasi() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>RPLFilm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to={'/'} className="nav-link"> Home </Link>
                        <Link to={'/trending'} className="nav-link"> Trending </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigasi;