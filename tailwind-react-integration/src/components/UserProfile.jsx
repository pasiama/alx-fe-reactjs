function UserProfile() {
      return (
            <div className="bg-gray-100 p-4 sm:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
              John Doe
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Developer at Example Co. Loves to write code and explore new technologies.
            </p>
          </div>
          
      );
    }
    
    export default UserProfile;
    
    