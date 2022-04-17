import styles from "./../styles/PunkCard.module.css";

function PunkCard({ punk, setMainPunk }) {
  return (
    <div
      className={styles.PunkCard}
      onClick={() => {
        setMainPunk(punk);
        console.log(punk);
      }}
    >
      <img src={punk.image_url} alt="" className={styles.PunkCardImage} />
      <div className={styles.InfoSection}>
        <div className={styles.name}>{punk.name}</div>
        <div className={styles.number}>•#{punk.token_id}</div>
        <div className={styles.wethAndPrice}>
          <img src="/assets/weth.png" alt="" className={styles.weth} />
          <div className={styles.price}>{punk.traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default PunkCard;
