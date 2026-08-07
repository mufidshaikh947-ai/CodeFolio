import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PublicRoute({ children }) {
  const {

loading,

isAuthenticated

} = useAuth();

if (loading) {

    return (

        <div>

            Loading...

        </div>

    );

}

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
