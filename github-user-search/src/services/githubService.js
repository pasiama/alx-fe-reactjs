import axios from 'axios';

// Function to fetch user data from GitHub based on username
export const fetchUserData = async (username) => {
  try {
    // Make a request to the GitHub API using the provided username
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return the user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;  // Handle errors by throwing them
  }
};

// Function for advanced user search with additional parameters like location and repos count
export const fetchAdvancedUserData = async ({ username, location, repos }) => {
  let query = '';
  if (username) query += `user:${username}`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>${repos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;  // Return the list of users
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    throw error;  // Handle errors by throwing them
  }
};
