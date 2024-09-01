
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
      if (!isAuthenticated()) {
            return <Navigate to="/login" />;
      }

      return children;
};

ProtectedRoute.propTypes = {
      children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
