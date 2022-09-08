import { Button, Col, Row } from "react-bootstrap";
import { User } from "../../components/User";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {user, load, currentPage, resultTitle} = useProfile();
    const {increasePage, decreasePage} = useProfile();

    if(load) {
        return <LoadingSpinner/>
    }

    return (
        <div className="container mt-3">
            <div className="d-flex align-items-center justify-content-center">
                <h2>{resultTitle}</h2>
            </div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {
                    user.map((a) => {
                        return (
                            <Col key={a.id}>
                                <User user={a}/>
                            </Col>
                        )
                    })
                }
            </Row>
            {!resultTitle.includes("No") &&
            <div className="d-flex justify-content-between" style={{width: "85vw"}}>
                <div className="d-flex align-items-center justify-content-start">
                    <Button className="myButton" type="button" onClick={decreasePage}>Previous</Button>
                </div>
                
                <div className="d-flex align-items-center justify-content-end">
                    <Button className="myButton" type="button" onClick={increasePage}>Next</Button>
                </div>
            </div>
            }
        </div>
    )
}
