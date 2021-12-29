import logo from './images/ironbralogo.png';
import spotify from './images/Spotify_Icon_RGB_Green.png';
import applemusic from './images/Apple_Music_Icon.svg'
import bandcamp from './images/bandcamp-button-circle-aqua-64.png';
import youtube from './images/yt_icon_rgb.png';
import ironbra from './images/ib-img.png';
import './App.css';

const MusicLink = (props) => {
  const {imgsrc, text, url} = props;

  return(
      <a className="MusicLink" href={url}>
        <img alt={text} src={imgsrc} />
        <h3>{text}</h3>
      </a>
  )
};

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>
            <img src={logo} className="App-logo" alt="Iron Bra logo" />
          </h1>
        </header>
        <main>
            <p>Oslo based doom metal band.</p>
          <h2>Listen on</h2>
          <MusicLink
              imgsrc={spotify}
              text="Spotify"
              url="https://open.spotify.com/artist/7xlgkDKW0eSAWlGHAwFvcu?si=cgdspY23QJC_gxdvjyo2Kw"
          />
          <MusicLink
              imgsrc={applemusic}
              text="Apple Music"
              url="https://music.apple.com/us/artist/1601515227"
          />
          <MusicLink
              imgsrc={bandcamp}
              text="Bandcamp"
              url="https://ironbra.bandcamp.com/"
          />
          <MusicLink
              imgsrc={youtube}
              text="YouTube"
              url="https://youtu.be/0fPwQJNZ-VE"
          />
          <img alt="The Ladies of Iron Bra looking smashing as fuck" src={ironbra} className="band-image" />
        </main>
        <footer>
          <p>Contact us @</p>
          <a href="mailto:iron.bra.doom@gmail.com">iron.bra.doom@gmail.com</a>
        </footer>
      </div>
  );
}

export default App;
