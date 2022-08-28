import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Profile } from "../../components/Profile";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {
        getLoad,
        getUsers,
    } = useProfile();

    let username = getLoad();
    let array = [];
    
    if(username) {
        username = getLoad();
        array = getUsers();
    }

    return (
        
        <div className="container mt-3">
            <Row md={2} xs={1} lg={3} className="g-3">
                {username ? (
                    array.map(a => {
                        return (
                            <Col key={a.id}>
                                <Profile user={a}/>
                            </Col>
                        )
                    })
                    
                    
                ) : (
                    <div className="d-flex align-items-center justify-content-center" style={{height: "85vh", width: "100vw"}}>
                        <h1 >Try to Search A Profile 😄</h1>
                    </div>
                )}

                {array.length >= 21 ? (
                    <div className="d-flex align-items-center justify-content-end" style={{width: "100vw"}}>
                        <button>Next</button>
                    </div>
                ): (
                    <div></div>
                )}
            </Row>
        </div>
    )


   
}