import PropTypes from 'prop-types';
import  { useContext } from 'react';
import UserContext from './components/UserContext';

const UserProfile = () => {
      const userData = useContext(UserContext);
                  return (
                        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
                              <h2 style={{ color: 'blue' }}>{userData.name}</h2>
                              <p>Age:<span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
                              <p>Bio: {userData.bio}</p>
                        </div>
                  );
            };

UserProfile.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      bio: PropTypes.string.isRequired,
};

export default UserProfile;
