import Head from "next/head";
import Nav from "./Nav";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>KiwiRail Survey</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div className={styles.layout}>
        <Nav className={styles.nav} />
        <>{children}</>
      </div>
    </>
  );
}
