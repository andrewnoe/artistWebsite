/**
 * 
 * Contains embedded links to spotify. 
 * Displayed in a vertical blog style.
 * 
**/

'use client'

import styles from "../styles/Portfolio.module.css";


export default function App() {
  return (
    <main className={styles.main}>
        <div className={styles.contents}>
            <h1>Releases I&apos;ve worked on</h1>
            <br/>

            <div className={styles.textbox}>
                <h2>Dolo Mar - Cold Summer</h2>
                <h3>Production, Vocal Engineer, Mixing, Mastering</h3>
            </div>
            
            <div className={styles.embed}>
                <iframe src="https://open.spotify.com/embed/track/5lUq1f6NZ6vgeMxxeb9wiQ?utm_source=generator"
                        width="100%" 
                        height="152" 
                        allow=" clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>

            <div className={styles.textbox}>
                <h2>TylerTheTrip - Touchdown</h2>
                <h3>Production, Vocal Engineer, Mixing, Mastering</h3>
            </div>

            <div className={styles.embed}>
                <iframe src="https://open.spotify.com/embed/track/5eFGELa4nNu1lUARTgIReS?utm_source=generator" 
                        width="100%" 
                        height="152"
                        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>

            <div className={styles.textbox}>
                <h2>aandrew - ambiance</h2>
                <h3>Production, Mixing, Mastering</h3>
            </div>

            <div className={styles.embed}>
                <iframe src="https://open.spotify.com/embed/album/4zeyPXQKXL3eItemmt3VFp?utm_source=generator" 
                        width="100%" 
                        height="352"
                        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>

        </div>
    </main>
  );

}
