
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children components (the protected route)
  return children;
};




ProtectedRoute.propTypes = {
      children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
