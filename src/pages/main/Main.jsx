import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useProfile } from "../../context/ProfileContext";

export function Main(avatar){

    const {
        loadData,
        getProfile,
        handleClick
    } = useProfile();

    avatar = handleClick();

    return (
        
        <section className="vh-100 bg-dark d-flex justify-content-center align-items-center flex-column">
        {!avatar ? (
            <div>
                <img src={avatar} className="bg-white rounded-circle" style={{width: "200px", height: "200px"}}></img>
            </div>
        ) : (
            <div>
                <p className="text-light">Hello</p>
            </div>
        )}
        </section>
    
    )


   
}