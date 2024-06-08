import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const endpoint = "http://localhost:3001/api/v1/users";
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data); // Debugging: Log the fetched data
      setUsers(data.data || []); // Update state with the actual user data array
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>Testing</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
