import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Teams } from "../pages/Teams";

import "../../css/geral.css"
import "../../css/Home.css"
import "../../css/Teams.css"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home_page" element={<Home />} />
                <Route path="/teams_page" element={<Teams />} />

                <Route path="*" element={<Navigate to={"/home_page"} />} />
            </Switch>
        </BrowserRouter>
    )
}