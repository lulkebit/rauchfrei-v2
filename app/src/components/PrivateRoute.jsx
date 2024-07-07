import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user) {
        return children;
    } else {
        return <Navigate to='/login' />;
    }
};
export default PrivateRoute;
