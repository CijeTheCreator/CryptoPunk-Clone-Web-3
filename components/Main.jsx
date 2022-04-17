import styles from "./../styles/Main.module.css";

function Main({ mainPunk }) {
  return (
    <div className={styles.Main}>
      <div className={styles.mainWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={mainPunk.image_url}
            alt=""
            className={styles.activePunkImage}
          />
        </div>
        <div className={styles.activePunkDetails}>
          <div className={styles.activePunkNameAndNumber}>
            <div className={styles.activePunkName}>{mainPunk.name}</div>
            <div className={styles.activePunkNumber}>•#{mainPunk.token_id}</div>
          </div>
          <div className={styles.activePunkDetailsBottom}>
            <div className={styles.activePunkOwner}>
              <img
                src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600"
                alt=""
                className={styles.ownerImage}
              />
              <div>
                <div className={styles.address}>{mainPunk.owner.address}</div>
                <div className={styles.ownerName}>@cijeTheCreator</div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <div>
                <img src="/assets/owner/instagram.png" alt="" />
              </div>
              <div>
                <img src="/assets/owner/twitter.png" alt="" />
              </div>
              <div>
                <img src="/assets/owner/more.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
