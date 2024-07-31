/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UserProfile from "./UserProfile";
import { Card } from "antd";
const { Meta } = Card;
const UserList = ({ users }) => {
  return (
    <div className="user-profile-container">
      {users.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
