import Image from "next/image";
import NextVideo from "next-video";
import styles from "./page.module.css";

import MuxPlayer from "@mux/mux-player-react";

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
        <div className = {styles.video}>
        <MuxPlayer
          streamType="on-demand"
          playbackId="vDdhnDcRC02Q801jx01gTt68Ttbyd875iAYOlvZzapB3QU"
          metadataVideoTitle="albumSongSnippetReel"
          autoPlay
          loop
          />

        </div>
        
      </main>
    </div>
  );

  //<video src={module.require('../../public/backgroundvideo.mp4')} autoPlay loop className={styles.video} />
  //<NextVideo src={bgVideo} autoPlay loop/>
}
