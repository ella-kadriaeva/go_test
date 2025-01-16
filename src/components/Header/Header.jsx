import React from "react";
import NavMenu from "./NavMenu";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Posts", href: "/posts" },
];
export default function Header() {
  return (
    <header>
      <nav className={styles.navContainer}>
        <NavMenu navLinks={navLinks} />
      </nav>
    </header>
  );
}
