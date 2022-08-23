import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {
        getLoad,
        getProfile
    } = useProfile();

    let username = getLoad();

    if(username) {
        username = getProfile();
    }

    return (
        
        <div>
            {username ? (
                <img src={username}></img>
            ) : (
                <p>Olá</p>
            )}
        </div>
    
    )


   
}