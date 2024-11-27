import Image from "next/image";
import styles from "../page.module.css";
import Link from 'next/link';
import backgroundImage from "../../../public/ExMachinaProjector.png"

export default function Home() {
  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.topbar}>
            <Link href="/">
                <button>Home</button>
            </Link>
            <Link href="/demos">
                <button>WIP</button>
            </Link>
          </div>
        </div>
        <div className={styles.contents}>
          <h1>Beats for sale</h1>
          <h2>2-15-24 B Major 81BPM</h2>
          <div className={styles.media}>
            
            <iframe src="https://drive.google.com/file/d/10_T6o9i_Acla3I6h-AlUC23Z97lYO2Fa/preview" width="480" height="120" allow="autoplay"></iframe>
          </div>
        </div>
        <div className = {styles.video}>
        <Image src={backgroundImage} alt="a blank wall with the opening scene of ExMachina being projected on it and a shadow standing in the projection"></Image>

        </div>
        
      </main>
    </div>
  );
}
