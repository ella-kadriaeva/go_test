import React from "react";
import styles from "./Users.module.css";

export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.info}></div>
      <div className={styles.main}>
        <h2>
          Click on a user's name card in the top navigation to view their
          details.
        </h2>
      </div>
    </div>
  );
}
