import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Card = ({ user }) => {
  const { id, name, username, company } = user;

  return (
    <li>
      <h2>{name.charAt(0)}</h2>
      <h5>{name}</h5>
      <p>
        <strong>@{username}</strong>
      </p>
      <p>{company.catchPhrase}</p>
      <Link to={`/users/${id}`} userr={user}>
        <Button text="View details" />
      </Link>
    </li>
  );
};

export default Card;
