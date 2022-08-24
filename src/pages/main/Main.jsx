import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Profile } from "../../components/Profile";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {
        getLoad,
        getProfile,
        getUsers,
    } = useProfile();

    let username = getLoad();
    let array = [];

    if(username) {
        username = getLoad();
        array = getUsers();
    }

    return (
        
        <div>
            {username ? (
                array.map((a) => { 
                    return <Profile name={a} key={a.id}/>
                })

            ) : (
                <p>Olá</p>
            )}
        </div>
    
    )


   
}