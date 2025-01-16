import React from "react";


import NavBar from "../NavBar/NavBar";

export default async function UserPage() {
  const data = await fetch("https://jsonplaceholder.org/users");
  const users = await data.json();

  return <NavBar users={users} />;

}
