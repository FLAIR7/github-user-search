import { Col, Row } from "react-bootstrap";
import { Profile } from "../../components/Profile";
import { useProfile } from "../../context/ProfileContext";

export function Main(){

    const {user, load, total, pages} = useProfile();

    const {
        increasePage,
    } = useProfile();

    return (
        
        <div className="container mt-3">
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
                    <div className="d-flex align-items-center justify-content-center" style={{width: "100vw"}}>
                        {pages.map(page => {
                           return <p key={page} className="p-1">{page}</p>
                        })}
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-end" style={{width: "100vw"}}>
                        <button onClick={() => increasePage()}>Next</button>
                    </div> */}

            </Row>
        </div>
    )


   
}