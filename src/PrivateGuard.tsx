import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./context";

interface Props {
    children: ReactNode;
}

const PrivateGuard = ({ children }: Props) => {
    const { user }= useUserContext()

    return user.id ? children : <Navigate to="/login" replace />
}

export default PrivateGuard;