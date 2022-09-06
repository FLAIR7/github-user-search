import { Outlet } from "react-router-dom";

export const Home = () => {
    return (
        <main>
            <div className="d-flex align-items-center justify-content-center" style={{height: "85vh"}}>
                <h1>Try to Search A Profile 😄</h1>
            </div>
            <Outlet/>
        </main>
    );  
}