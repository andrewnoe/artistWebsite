'use client'

import { AppProps } from 'next/app';

import MuxPlayer from "@mux/mux-player-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Demos from "./demos/page"
import Beats from "./beats/page"
import Portfolio from "./portfolio/page"
import { useMounted } from './useMounted'

import styles from "./page.module.css";

export default function Home({ Component, pageProps }: AppProps) {

  

    //Managing button status between pages
    const [showBeatsButton, setShowBeatsButton] = useState(true);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [showHomeButton, setShowHomeButton] = useState(false);
    const [showRelButton, setShowRelButton] = useState(true);
  
    const [audioPlayerStatus, setPlayerStatus] = useState(false);
  
    let magicHomeButton;
  
    //Logic for loading the audio player on returning to home page
    if (audioPlayerStatus){
      magicHomeButton = <Link to="/beats">{showHomeButton && <button onClick={() => { setShowRelButton(true); setShowBeatsButton(false); setShowCloseButton(true); setShowHomeButton(false); setPlayerStatus(true);}}>Home</button>}</Link>;
    }
    else{
      magicHomeButton = <Link to="/">{showHomeButton && <button onClick={() => {  setShowRelButton(true); setShowBeatsButton(true); setShowCloseButton(false); setShowHomeButton(false); setPlayerStatus(false);}}>Home</button>}</Link>;
    }
  
    const mounted = useMounted()
    if (!mounted) return null

  return (
    <Router>
      <div className={styles.page}>
        <div className = {styles.video}>
          <MuxPlayer
            streamType="on-demand"
            playbackId="vDdhnDcRC02Q801jx01gTt68Ttbyd875iAYOlvZzapB3QU"
            metadataVideoTitle="albumSongSnippetReel"
            autoPlay
            loop
            muted
            />
        </div>
        <div className = {styles.pageWrapper}>
          <div>
            <div className={styles.topbar}>
                <Link to="/">
                  {showCloseButton && <button onClick={() => { setShowBeatsButton(true); setShowCloseButton(false); setPlayerStatus(false);}}>Close Player</button>}
                </Link>
                {magicHomeButton}
                <Link to="/beats">
                  {showBeatsButton && <button onClick={() => { setShowBeatsButton(false); setShowCloseButton(true); setPlayerStatus(true);}}>Beats</button>}
                </Link>
                <Link to="/portfolio">
                  {showRelButton && <button onClick={() => { setShowBeatsButton(false); setShowCloseButton(false); setShowHomeButton(true); setShowRelButton(false);}}>Releases</button>}
                </Link>
            </div>
          </div>
          <div className={styles.homeContainer}>
            <div>
                <Routes>
                  <Route path="/"/>
                  <Route path="/demos" element={<Demos/>} />
                  <Route path="/portfolio" element={<Portfolio/>} />         
                </Routes>
            </div>
            <main className={styles.main}>
              <div className={styles.player}>
                <Routes>   
                    <Route path="/beats" element={<Beats/>} />
                      
                </Routes>
              </div>
              <div className={styles.contentWrapper}>
                <div className={styles.contents}>
                  <h1>aandrew</h1>
                  
                  <div className={styles.buttons}>
                    <div className = {styles.textbox}>
                      <h2>stream my album</h2>
                    </div>
                      <a href="https://linktr.ee/aandrew1">
                        <button>listen</button>
                      </a>
                    <div className = {styles.textbox}>
                      <h2>email for beats and mixing/mastering</h2>
                    </div>
                      <a href="mailto:777aandrew@gmail.com">
                        <button>email</button>
                      </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}
