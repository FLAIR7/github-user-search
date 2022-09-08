import { Route, Routes} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../pages/main/Main";
import { Profile } from "../components/Profile";

export function RoutePages(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="users" element={<Main/>}></Route>
            <Route path="/users/:id" element={<Profile/>}/>
        </Routes>
    )
}