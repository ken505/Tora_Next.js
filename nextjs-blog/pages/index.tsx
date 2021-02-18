import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

// ts 型定義をインポート
import { GetStaticProps } from "next";

// js コード
// // SSG
// export async function getStaticProps() {

//   // SSR
//   // export async function getServerSideProps() {

//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// ts コード
export default function Home({
  allPostsData,
}: {
  // allPostsData はオブジェクトであり、要素の型は string 指定。
  allPostsData: {
    date: string;
    title: string;
    id: string;

    // 配列であることを指定。 [];
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I appreciate you coming my room ☺️</p>
        <p>
          I'm learning by filling this page with what I want to do.
          <br />{" "}
          <a href="https://nextjs.org/learn/excel/typescript/nextjs-types">
            My next task - Rewriting to typescript
          </a>
          <ul>
            <li>components/date.js</li>
            <li>components/layout.js</li>
            <li>lib/posts.js:</li>
            <li>pages/posts/[id].js</li>
            <li>pages/index.js ☑️</li>
            <li>pages/_app.js</li>
            <li>pages/api/hello.js</li>
          </ul>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// ts コード
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
