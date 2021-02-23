import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const users = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.data)
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="row">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
