import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            </strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              maiores alias esse mollitia voluptatum molestiae, eligendi, nam
              nulla impedit ratione explicabo consectetur vel officia sunt iure
              quidem ut soluta? Consectetur.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            </strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              maiores alias esse mollitia voluptatum molestiae, eligendi, nam
              nulla impedit ratione explicabo consectetur vel officia sunt iure
              quidem ut soluta? Consectetur.</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            </strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              maiores alias esse mollitia voluptatum molestiae, eligendi, nam
              nulla impedit ratione explicabo consectetur vel officia sunt iure
              quidem ut soluta? Consectetur.</p>
          </a>
        </div>
      </main>
    </>
  );
}
