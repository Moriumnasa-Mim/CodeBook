import { Navigate } from "react-router";

const ProtectedRoute = ({children})=>{
    const token = JSON.parse(sessionStorage.getItem("token"));

    return token? children: <Navigate to={'/Loginpage'}/>
}

export default ProtectedRoute