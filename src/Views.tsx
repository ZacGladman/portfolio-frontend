import { Homepage } from "./Homepage";
import { Route, Routes } from "react-router-dom";

export function Views():JSX.Element {
    return (
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="*" element={<Homepage />} />
            </Routes>
    )
}