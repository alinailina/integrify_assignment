import React, { useState, useEffect } from "react";

import Header from "./Header";
import Card from "./Card";

const Users = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <p className='msg'>Error: {error.message}</p>;
  } else if (!isLoaded) {
    return <p className='msg'>Loading...</p>;
  } else {
    return (
      <div className="users">
        <Header text="All users" />
        <ul>
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
};

export default Users;
