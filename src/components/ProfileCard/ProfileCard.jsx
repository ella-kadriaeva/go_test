import styles from "./ProfileCard.module.css";
import React from "react";
import BlockItem from "../BlockItem/BlockItem";
import Title from "../Title/Title";
import ContactBlock from "../ContactBlock/ContactBlock";

const formatedData = (serverDate) => {
  const date = new Date(serverDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export default async function ProfileCard({ id }) {
  const data = await fetch(`https://jsonplaceholder.org/users/${id}`);
  const user = await data.json();
  const {
    firstname,
    lastname,
    email,
    birthDate,
    login,
    address,
    phone,
    website,
    company,
  } = user;
  const date = formatedData(login.registered);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <ContactBlock email={email} phone={phone} website={website} />
      </div>
      <div className={styles.main}>
        <BlockItem title="User`s Info">
          <Title
            title={lastname}
            titleLabel="User`s fullname:"
            titleText={firstname}
          />
          <Title titleLabel="Username:" titleText={login.username} />
          <Title titleLabel="User`s birthday:" titleText={birthDate} />
          <Title titleLabel="Day of regestration:" titleText={date} />
        </BlockItem>
        <BlockItem title="Company Info">
          <Title titleLabel="Company:" titleText={company.name} />
          <Title titleLabel="Business:" titleText={company.bs} />
          <Title titleLabel="Credo:" titleText={company.catchPhrase} />
        </BlockItem>
        <BlockItem title="Address Info">
          <Title titleLabel="City" titleText={address.city} />
          <Title titleLabel="Adress:" titleText={address.street} />
          <Title titleLabel="Zipcode:" titleText={address.zipcode} />
        </BlockItem>
      </div>
    </div>
  );
}
