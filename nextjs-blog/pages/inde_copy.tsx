import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

// ts 型定義をインポート
import { GetStaticProps } from "next";

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
      </section>

      {/* Blog section の copy に外部 API リンクを実装。 */}
      {/* CSS スタイルは共通のまま */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>外部API</h2>
        <ul className={utilStyles.list}>

          {/* データの参照方法だけを */}
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
// allPostData をどこで受け取っているかわからない。

// ts コード
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
