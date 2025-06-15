import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../providers/RoutesWithNotFound";
import { DashboardRouter } from "./dashboard/Dashboard.router";
import { PrivateRoutes } from "./dashboard/models";

export const PrivateRouter = () => {
    return <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<DashboardRouter/>}/>
    </RoutesWithNotFound>
}