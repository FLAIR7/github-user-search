import { Route, Routes} from "react-router-dom";
import { Main } from "../pages/main/Main";

export function RoutePages(){
    return (
        <Routes>
            <Route path="/" element={<Main/>}></Route>
        </Routes>
    )
}