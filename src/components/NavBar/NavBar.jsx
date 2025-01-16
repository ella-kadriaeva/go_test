"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";

export default function NavBar({ users }) {
  const pathname = usePathname();
  return (
    <ul className={styles.container}>
      {users.map((user) => {
        const href = `/users/${user.id}`;
        const isActive = pathname === href;

        return (
          <li className={styles.item} key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className={isActive ? `${styles.active}` : ""}
            >
              <p>{user.firstname}</p>
              <p>{user.lastname}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
