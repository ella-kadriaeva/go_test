"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function NavBar({ navLinks }) {
  const pathname = usePathname();
  return (
    <ul className={styles.menuList}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li className={styles.item} key={link.label}>
            <Link
              href={link.href}
              className={isActive ? `${styles.active}` : ""}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
