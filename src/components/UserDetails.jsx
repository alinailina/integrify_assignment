import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "./Header";

const UserDetails = () => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({
    address: {},
    company: {},
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  console.log(user);

  const { name, username, email, phone, website } = user;
  const { street, suite, city, zipcode } = user.address;
  const companyName = user.company.name;

  if (error) {
    return <p className='msg'>Error: {error.message}</p>;
  } else if (!isLoaded) {
    return <p className='msg'>Loading...</p>;
  } else {
    return (
      <div className="details">
        <Header text="User details" />
        <h3>{name}</h3>
        <h5>
          <strong>@ {username}</strong>
        </h5>
        <h5>Company: {companyName}</h5>
        <h5>Email: {email}</h5>
        <h5>Tel.: {phone}</h5>
        <h5>
          Address: {street}, {suite}, {city}, {zipcode}
        </h5>

        <h5>
          Website:{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.{website}
          </a>
        </h5>
      </div>
    );
  }
};

export default UserDetails;
