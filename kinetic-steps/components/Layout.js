// components/Layout.js
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.brand}>
            K<span className={styles.slash}>/</span>NET
            <span className={styles.slash}>/</span>C
          </div>
          <div className={styles.subtext}>moving people</div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.text}>Talk to a Consolidation Specialist</div>
          <div className={styles.phone}>
            <span className={styles.phoneIcon}>📞</span>
            <a href="tel:8888888888">(888) 888-8888</a>
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <div className={styles.links}>
        <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a> |{" "}
        <a href="#">California Privacy</a>
      </div>

      <footer className={styles.footer}>
        <p>
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, Facebook does NOT endorse this site. FACEBOOK is a
          trademark of FACEBOOK, Inc. This site is not a part of the YouTube
          website or Google, LLC. Additionally, This site is NOT endorsed by
          Google in any way.
        </p>
        <p>
          While we may provide you preliminary information on whether you
          qualify for compensation, your local governing body ultimately
          determines who qualifies and what claims are paid. This site is
          provided for informational purposes only. If you have questions about
          whether you qualify, please contact an attorney.
        </p>
        <p>
          <strong>THIS IS A PAID ATTORNEY / ADVOCATE ADVERTISEMENT.</strong>
        </p>
        <p>
          *While we may provide you preliminary information on whether you may
          qualify for compensation, the U.S. District Court: Eastern District of
          North Carolina ultimately determines who qualifies and what claims are
          paid. This site is provided for informational purposes only. If you
          have questions about whether you qualify, please contact an attorney.
        </p>
        <p>
          This website uses Google Analytics and Google Ads to track your
          journey for marketing purposes. If you wish to opt-out of
          user-tracking click here.
        </p>
      </footer>
    </div>
  );
}
