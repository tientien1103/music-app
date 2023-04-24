import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Tracklist from "./components/Tracklist";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Tracklist />
        <Controller />
      </div>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
