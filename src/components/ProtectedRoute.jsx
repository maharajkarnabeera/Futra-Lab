import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utilities/authStore';

const ProtectedRoute = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/signup" replace />;
  }
  
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
