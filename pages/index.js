import Head from "next/head";
import Link from "next/link";
import { useSessionStorage } from "../hooks/BrowserStorage";
import Layout from "../components/Layout";
import SlideShow from "../components/SlideShow";
import styles from "../styles/index.module.css";
export default function Home() {
  const [survey, setSurvey] = useSessionStorage("survey", "");

  return (
    <section className={styles.index}>
      <h1>Thanks for taking part in our survey</h1>
      <p>Please indicate which of our services you are providing feedback on</p>
      <div className={styles.button_container}>
        <button className={styles.button_active} onClick={() => setSurvey("passenger")}>
          <Link href="/survey">
            <a>Passenger Services</a>
          </Link>
        </button>
        <button className={styles.button_active} onClick={() => setSurvey("freight")}>
          <Link href="/survey">
            <a>Freight Services</a>
          </Link>
        </button>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>KiwiRail Customer Survey: Home</title>
        <meta property="og:title" content="KiwiRail Customer Survey: Home" key="title" />
      </Head>
      <SlideShow />
      {page}
    </Layout>
  );
};
