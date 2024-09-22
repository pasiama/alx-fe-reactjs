import axios from "axios";

// GitHub API endpoint for searching users
const BASE_URL = "https://api.github.com/search/users?q";

// Function to fetch GitHub users based on username, location, and minimum repository count
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    // Construct the query parameters for the GitHub API search
    let query = `q=${username}`;
    
    // Add location to the query if it's provided
    if (location) {
      query += `+location:${location}`;
    }
    
    // Add minRepos to the query if a value is provided
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API call with the constructed query
    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data: ", error);
    throw error;
  }
};
