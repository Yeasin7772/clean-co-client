import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({ children }) => {
    const navigate = useNavigate()
    const { user, loading } = useAuth()
    if (loading) {
        return <div><progress className="progress progress-success w-56" value={0} max="100"></progress>
        </div>
    }
    if (!user?.email) {
        return navigate('/login')
    }
    return children
};

export default PrivateRoutes;