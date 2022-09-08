import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function User({user}){
    
    return (
        <Card className="h-100">
            <Card.Img 
                variant="top"
                src={user.avatar_url}
                height="200px"
                style={{objectFit: "cover"}}
            />
            <Card.Body>
                <Card.Body className="d-flex flex-column">
                    {/* <Link to={`/book/${user.id}`} {...user}/> */}
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <Link to={`/users/${user.id}`} {...user} style={{color: "white", textDecoration: "none"}}>
                        <span>{user.login}</span>
                    </Link>
                    </Card.Title>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}