import { Button, Col, Row } from "react-bootstrap";
import { Profile } from "../../components/Profile";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {user, load, total} = useProfile();
    const {increasePage, decreasePage} = useProfile();

    let content;
    if(user.length === 0 && load) {
        content = <LoadingSpinner/>
    }

    return (
        
        <div className="container mt-3">
            {content}
            <Row md={2} xs={1} lg={3} className="g-3">
                
                {load ? (
                    user.map(a => {
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
                    <div>Total of users {total}</div>

                    <div className="d-flex justify-content-between" style={{width: "100vw"}}>
                        <div className="d-flex align-items-center justify-content-start">
                            <Button className="myButton" type="button" onClick={decreasePage}>Previous</Button>
                        </div>

                        <div className="d-flex align-items-center justify-content-end">
                            <Button className="myButton" type="button" onClick={increasePage}>Next</Button>
                        </div>

                    </div>

            </Row>
        </div>
    )


   
}
