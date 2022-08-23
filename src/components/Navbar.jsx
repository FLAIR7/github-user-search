import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import { useProfile } from '../context/ProfileContext';

export function Header(){

    const {
        handleProfileChange,
        handleClick
    } = useProfile();

    return (
        <header className="text-light">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/" className="text-light">FindDev</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Find Profile"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleProfileChange}
                        />
                        <Button variant="success" onClick={handleClick}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}