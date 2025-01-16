import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import React from "react";

export default async function UserPage({ params }) {
  const { id } = await params;

  return (
    <>
      <ProfileCard id={id} />
    </>
  );
}
