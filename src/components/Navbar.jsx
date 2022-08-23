import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { Main } from "../pages/main/Main";

export function Navbar(){

    const {
        getProfile,
        loadData,
        handleProfileChange,
        handleClick
    } = useProfile();

    return (
        <header className="bg-dark text-light d-flex border-bottom border-white" style={{height: "70px"}}>
            <nav className="d-flex justify-content-around align-items-center" style={{width: "100%"}}>
                <Nav.Link>
                    Github Search
                </Nav.Link>
                <Form className="d-flex align-items-center">
                    <Form.Group className="px-2">
                        <Form.Control className="form-control-sm" onChange={handleProfileChange} placeholder="Profile Name"></Form.Control>
                    </Form.Group>
                    <Button size="sm" onClick={handleClick}>Search</Button>
                </Form>
            </nav>
        </header>
    );
}