import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import { useProfile } from '../context/ProfileContext';
import ReactSwitch from 'react-switch';
import { useEffect } from 'react';

export function Header({theme, toggler}){

    const {
        handleProfileChange,
        handleClick,
    } = useProfile();

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" className="text">Github Profile Search | </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <ReactSwitch 
                        onChange={toggler} 
                        checked={theme === "dark"} 
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        onColor="#000"
                        />
                    </Nav>
                    <Form className="d-flex" onSubmit={handleClick}>
                        <Form.Control
                        type="search"
                        placeholder="Find Profile"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleProfileChange}
                        maxLength="39"
                        />
                        <Button type="button" variant="dark" onClick={handleClick}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}