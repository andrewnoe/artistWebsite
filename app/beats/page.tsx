/**
 * 
 * Contains an audio player package that is rendered on the home page when selected. 
 * Audio plays while scrolling and stops when player is closed or a different page is selected
 * 
 * The player streams audio from external links and can be sorted by type.
 * 
**/
'use client'

import styles from "../styles/Beats.module.css";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";


export default function App() {

  const tracks = [
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/33lxzha2eravhpvwzb5t5/7-25-24-disbelief-Fsharp-m-88.mp3?rlkey=l6ircxee3i8rtc1l74330rauz&st=pro5hhgj',
      title: 'dusty beat 01 88bpm',
      tags: ['dusty']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/h9s9li91rlqb5lft8rr5c/01-03-25-wash-your-hands-please-Ab-161.mp3?rlkey=20wsnc8b63pc0b18ourlhtird&st=kuo4j6vy',
      title: 'ethereal beat 01 161bpm',
      tags: ['ethereal']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/inhr1tmazp6w5nyttxl80/1-5-24-long-distance-Ab-153.mp3?rlkey=svof9jzwkk338mrd4cfs1ce00&st=dt5m9l46',
      title: 'ethereal beat 02 153bpm',
      tags: ['ethereal']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/e73b5dgrcgtl6hy9c0snw/1-8-24-solid-Fm-130.mp3?rlkey=5kf4vs50qc55hhzy74amqjokr&st=51ke2ccu',
      title: 'dark beat 01 130bpm',
      tags: ['dark']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/o5r5ppktyrcv811tuqb41/1-12-24-shades-of-tan-G-80.mp3?rlkey=xhionwc5bxc3d72we30h4vl9r&st=mdkamik7',
      title: 'dusty beat 02 80bpm',
      tags: ['dusty']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/6fxthqhc3hern6fy38c81/1-25-24-on-fire-C-150.mp3?rlkey=atsrcqmsekmjlfrih9t8y0omz&st=pof3cqnd',
      title: 'bright beat 01 150bpm',
      tags: ['bright']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/rlxalvfp19y8fk1wxj42r/2-6-24-yeah-but-whatever-C-150.mp3?rlkey=a5gcda8rkt0z3cf1q3ckaesqf&st=yq4nkdpo',
      title: 'bright beat 02 150bpm',
      tags: ['bright']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/vpu206120hm26y2fjq3ct/7-10-24-everyday-No-Vocals-Bm-85.mp3?rlkey=2tkaqme6pwlzfl1gdzlky34vo&st=gqb91s8i',
      title: 'bright beat 03 88bpm',
      tags: ['bright']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/mt8iswdpngzzttd5zrdlr/10-7-23-addiction-Gm-165.mp3?rlkey=i4pkelm15ix2cxswqcm2wp1mf&st=u7hmot6n',
      title: 'dark beat 02 165bpm',
      tags: ['dark']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/rjua9i7n0dpoy17s9ho9x/12-6-24-fake-80s-e-piano-type-beat-Eb-185.mp3?rlkey=pkh6hlib15sqcgsdf7b6yg94y&st=4tirojeq',
      title: 'bright beat 04 185bpm',
      tags: ['bright']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/73ksxpk1gw2ujn8ennk5j/12-7-23-spreadsheet-type-beat-Gm-or-Eb-84.mp3?rlkey=1cew4iqmtrtoo8bv19c2pg26u&st=qqg86h09',
      title: 'dusty beat 03 84bpm',
      tags: ['dusty']
    },
    {
      url: 'https://dl.dropboxusercontent.com/scl/fi/wlkx8ftvn1yss2lb55p3p/12-14-23-stimulated-Ab-157.mp3?rlkey=8ivsqttxmbt0wgg6iwlpjuz9z&st=uwe50j2u',
      title: 'bright beat 05 157bpm',
      tags: ['bright']
    },

  ]

  const colors = {
    tagsBackground: "#123622",
    tagsBackgroundHoverActive: "#1f3361",
    progressSlider: "#1f3361",
    volumeSlider: "#1f3361"
  }

  return (

    <main className={styles.main}>
        <Player
          trackList={tracks}
          customColorScheme={colors}
          includeTags={true}
          includeSearch={false}
          showPlaylist={true}
          sortTracks={true}
          autoPlayNextTrack={false}
        />
    </main>
  );
}
