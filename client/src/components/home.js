import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Function to fetch user's data
    const fetchUserData = async () => {
      try {
        const response = await axios.post('/'); // Replace with your actual backend route

        if (response.status === 200) {
          const { name } = response.data;
          setUserData({ name });
        } else {
          // Handle other response statuses (e.g., unauthorized)
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function to retrieve user data
    fetchUserData();
  }, []);

  return (
    
      <div className='Home'>
        <h2 className='home-content'>WELCOME <span className='user-name'> {userData.name} </span> </h2>
        
      </div>
  );
}
export default Home;