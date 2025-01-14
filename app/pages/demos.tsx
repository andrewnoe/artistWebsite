/**
 * 
 * Unused for now
 * 
**/

'use client'

import Image from "next/image";
import styles from "../page.module.css";
import backgroundImage from "@/public/BladerunnerProjector.jpg"

export default function App() {
  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.contents}>
            <h1>Works in Progress</h1>
          </div>
          <div className = {styles.video}>
            <Image src={backgroundImage} alt="a concrete barrier with the opening scene of Bladerunner being projected on it against the night sky"></Image>

          </div>
          
        </main>
      </div>
  );

}
