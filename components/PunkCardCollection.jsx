import styles from "./../styles/PunkCardCollection.module.css";
import PunkCard from "./PunkCard";
import { useState, useEffect } from "react";
import axios from "axios";

function PunkCardCollection({ setMainPunk }) {
  const [punks, setPunks] = useState([]);
  useEffect(() => {
    const getNFTs = async () => {
      const response = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?owner=0x41196844aCB0fa51A2Cf72a99691E5f6644c547C&order_direction=asc&offset=0&limit=20"
      );
      setPunks(response.data.assets);
      console.log(response.data.assets);
    };
    getNFTs();
  }, []);
  return (
    <div className={styles.PunkCardCollection}>
      <div className={styles.PunkCardCollectionWrapper}>
        <div className={styles.PunkCards}>
          {punks.map((punk) => (
            <PunkCard punk={punk} setMainPunk={setMainPunk}></PunkCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PunkCardCollection;
