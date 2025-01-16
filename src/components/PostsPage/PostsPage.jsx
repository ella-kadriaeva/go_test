import Image from "next/image";
import styles from "./PostPage.module.css";
export default async function PostsPage() {
  const data = await fetch("https://jsonplaceholder.org/posts");

  const posts = await data.json();

  return (
    <ul className={styles.container}>
      {posts.map((post) => (
        <li className={styles.listItem} key={post.id}>
          <h4>{post.title}</h4>
          <div className={styles.contentWrapper}>
            <p className={styles.textContent}>{post.content}</p>
            <Image
              src={post.thumbnail}
              alt="photo to post"
              width="200"
              height="200"
            />
          </div>

          <h6>{post.status}</h6>

          <p className={styles.date}>Posted: {post.publishedAt}</p>
          <p className={styles.date}>Updated: {post.updatedAt}</p>
        </li>
      ))}
    </ul>
  );
}
