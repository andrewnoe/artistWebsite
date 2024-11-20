import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contents}>
          <h1>aambiance by aandrew</h1>
          <div className={styles.buttons}>
            <a href="https://linktr.ee/aandrew1">
              <button>listen</button>
            </a>
            
            <a href="https://instagram.com/aandrew.mp3">
              <button>instagram</button>
            </a>
            <a href="mailto:777aandrew@gmail.com">
              <button>email</button>
            </a>
          </div>
        </div>
        <video src={module.require('../../public/backgroundvideo.mp4')} autoPlay loop className={styles.video} />
      </main>
    </div>
  );
}
