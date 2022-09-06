import { Route, Routes} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Main } from "../pages/main/Main";

export function RoutePages(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="users" element={<Main/>}></Route>
        </Routes>
    )
}