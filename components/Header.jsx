import styles from "./../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className="logoContainer">
        <img
          src="/assets/header/cryptopunk-logo.png"
          alt=""
          className={styles.logo}
        />
      </div>
      <div className={styles.searchContainer}>
        <img
          src="/assets/header/search.png"
          alt=""
          className={styles.searchLogo}
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Items, Collections and Accounts"
        />
      </div>
      <div className={styles.headerActions}>
        <div>Drops</div>
        <div>Marketplace</div>
        <div>Create</div>
      </div>
      <div className={styles.darkModeToogle}>
        <img
          src="/assets/header/theme-switch.png"
          alt=""
          className={styles.darkModeToogleImage}
        />
      </div>
      <div className={styles.getInButton}>GET IN</div>
    </div>
  );
}

export default Header;
