import React from "react";
import styles from "./Title.module.css";

export default function Title({
  title = "",
  titleLabel,
  titleText = "not specified",
}) {
  return (
    <p className={styles.title}>
      <span className={styles.description}>{titleLabel}</span>
      {`${titleText} ${title}`}
    </p>
  );
}
