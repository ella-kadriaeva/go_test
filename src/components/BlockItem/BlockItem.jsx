import React from "react";
import styles from "./BlockItem.module.css";

export default function BlockItem({ title, children }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
