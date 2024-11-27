import Image from "next/image";
import styles from "../page.module.css";
import Link from 'next/link';
import backgroundImage from "../../../public/BladerunnerProjector.jpg"

export default function Home() {
  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topbar}>
          <Link href="/">
              <button>Home</button>
          </Link>
          <Link href="/beats">
              <button>Beats</button>
          </Link>
        </div>
        <div className={styles.contents}>
          <h1>Works in Progress</h1>
          <div className={styles.buttons}>

          </div>
        </div>
        <div className = {styles.video}>
          <Image src={backgroundImage} alt="a concrete barrier with the opening scene of Bladerunner being projected on it against the night sky"></Image>

        </div>
        
      </main>
    </div>
  );

}
