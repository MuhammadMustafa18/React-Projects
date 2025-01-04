import React, { useContext } from "react";
import UserContext from "../context/Usercontext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if(!user) return <div>bruh</div>
  return <div>Name: {user.username}</div>;
};

export default Profile;
