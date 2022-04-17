import Link from "next/link";
import styles from "../styles/nav.module.css";
import SVG_KiwiRailLogo from "./SVG_KiwiRailLogo";

/**
 * It returns a nav element with two divs inside it. The first div contains a SVG_KiwiRailLogo
 * component, and the second div contains two a elements.
 */
export default function Nav() {
  return (
    <nav className={styles.nav_bar} role="navigation">
      <div>
        <Link href="/">
          <a title="Home">
            <SVG_KiwiRailLogo />
          </a>
        </Link>
      </div>
      <div>
        <a
          className={styles.nav_item}
          role="link"
          href="https://www.kiwirail.co.nz/what-we-do/"
          target="_blank"
          rel="noreferrer">
          Our Services
        </a>
        <a
          className={styles.nav_item}
          role="link"
          href="https://www.kiwirail.co.nz/contact-us/"
          target="_blank"
          rel="noreferrer">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
