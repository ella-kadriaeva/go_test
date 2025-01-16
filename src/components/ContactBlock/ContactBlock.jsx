import React from "react";
import Link from "next/link";
import styles from "./ContactBlock.module.css";

export default function ContactBlock({ phone, website, email }) {
  return (
    <div className={styles.container}>
      <h2>Contacts</h2>
      <p className={styles.title}>Phone: </p>
      <Link className={styles.description} href={`tel:${phone}`}>
        {phone}
      </Link>

      <p className={styles.title}>Website: </p>
      <Link
        href={`${website}`}
        className={styles.description}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </Link>

      <p className={styles.title}>Email: </p>
      <Link className={styles.description} href={`mailto:${email}`}>
        {email}
      </Link>
    </div>
  );
}
