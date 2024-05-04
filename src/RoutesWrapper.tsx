import { Route, Routes } from "react-router-dom";
import { routes } from "./consts/routes";
import { HomePage } from "./pages/HomePage";
import SignInSide from "./pages/Auth/Login/SignInSide";
import SignUp from "./pages/Auth/Register/SignUp";
import { LofiAtc } from "./pages/Content/LofiAtc";
import {OSL} from "./pages/Content/Airports/OSL"

export const RoutesWrapper = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={routes.Home} element={<HomePage />} />
        <Route path={routes.Login} element={<SignInSide />} />
        <Route path={routes.Register} element={<SignUp />} />
        <Route path={routes.LofiAtc} element={<LofiAtc />} />

        {/*Airport Routes */}
        <Route path={routes.OSL} element={<OSL />} />
    </Routes>
);
