/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // States for the username input, loading, user data, and error
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [minRepos, setMinRepos] = useState(0);

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent default form submission
    setLoading(true);  // Start loading
    setError(false);   // Reset any previous errors
    setUserData(null); // Clear any previous user data

    try {
      const data = await fetchUserData(username, location, minRepos);
            setUserData(data);  // Set the fetched user data
    } catch (err) {
      setError(true);  // Handle error if the user isn't found
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div className="search-component">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={minRepos}
          onChange={(e) => setUsername(e.target.value)}  // Update the username state
          placeholder="Enter GitHub username"
          className="border p-2 mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}  {/* Display loading message */}

      {error && <p>Looks like we cant find the user.</p>}  {/* Error message */}

      {/* If user data is available, display it */}
      <div className="results">
        {userData.length > 0 && (
          <ul className="user-list">
            {userData.map((user) => (
              <li key={user.id} className="user-item flex items-center mb-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
