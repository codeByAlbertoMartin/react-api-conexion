import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context";

//Outlet es el hijo de una ruta, por eso lo sustituimos por children

const PrivateGuard = () => {
    const { user }= useUserContext()

    return user.id ? <Outlet/> : <Navigate to="/about" replace />
}

export default PrivateGuard;