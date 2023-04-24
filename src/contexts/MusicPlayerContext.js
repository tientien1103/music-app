import React, { useState } from "react";
import Track1 from "../music/track1.mp3";
import Track2 from "../music/track2.mp3";
import Track3 from "../music/track3.mp3";

const MusicPlayerContext = React.createContext();
const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Pretty Girl - Maggie",
      file: Track1,
    },
    {
      name: "Pink Vernom - BlackPink",
      file: Track2,
    },
    {
      name: "Normal No More - TYSM",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

function MusicPlayerProvider({ children }) {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerProvider, MusicPlayerContext };
