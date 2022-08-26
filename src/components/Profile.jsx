import { Card } from "react-bootstrap";

export function Profile({user}){
    
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
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span>{user.login}</span>
                    </Card.Title>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}