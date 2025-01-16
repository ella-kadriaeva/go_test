import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Тестове завдання виконано на Next.js</h1>
        <p className={styles.text}>
          для участі у розробці сайту для благодійної організації “ІнХармоні.Юа”
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Потрібно реалізувати SSR додаток за допомогою Next.js, який
            працюватиме з моковими даними. Доступ до даних отримувати з ресурсу
            <Link
              className={styles.link}
              href=" https://www.jsonplaceholder.org/"
            >
              https://www.jsonplaceholder.org/
            </Link>
          </li>
          <li className={styles.listItem}>
            <span className={styles.numItem}>1.</span>
            Завдання виконати лише для десктопної версії, стилізація на власний
            розсуд, багато уваги цьому приділяти не потрібно. Для стилізації
            можна використовувати модулі css.
          </li>
          <li className={styles.listItem}>
            <span className={styles.numItem}>2.</span>У додатка повинен бути
            хедер з блоком навігації, який буде переадресовувати юзера між
            сторінками: -UsersPage -PostsPage
          </li>
          <li className={styles.listItem}>
            <span className={styles.numItem}>3.</span>
            Сторінка
            <Link className={styles.link} href="/users">
              UsersPage
            </Link>
            повинна рендерити список юзерів, які отримує виконавши відповідний
            запит, розміщених горизонтально в верхній частині сторінки під
            хедером. Елементи списку повинні бути елементами навігації, клік по
            яким буде рендерити блок з відповідною інформацією про юзера.
          </li>
          <li className={styles.listItem}>
            <span className={styles.numItem}>4.</span>
            Блок з інформацією про юзера повинен бути серверним компонентом і
            виконувати запит на відповідну адресу для отримання даних.
          </li>
          <li className={styles.listItem}>
            <span className={styles.numItem}>5.</span>
            Сторінка
            <Link className={styles.link} href="/posts">
              PostsPage
            </Link>
            повинна отримувати список постів і рендерити його. Компонент повинен
            бути серверним.
          </li>
        </ul>
      </main>
    </div>
  );
}
