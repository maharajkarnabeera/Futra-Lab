import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../utilities/authStore';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore(); // Access token directly from Zustand

  if (!token) {
    return <Navigate to="/signin" replace />; // Redirect to /signin if no token
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;