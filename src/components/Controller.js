import { Box, IconButton } from "@mui/material";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";

function Controller() {
  const {
    currentTrackIndex,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
    playTrack,
  } = useMusicPlayer();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pl: 1,
        pb: 1,
      }}
    >
      <IconButton aria-label="previous" onClick={() => playPreviousTrack()}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton
        aria-label="play/pause"
        onClick={() => playTrack(currentTrackIndex)}
      >
        {isPlaying ? (
          <PauseIcon sx={{ height: 38, width: 38 }} />
        ) : (
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        )}
      </IconButton>
      <IconButton aria-label="next" onClick={() => playNextTrack()}>
        <SkipNextIcon />
      </IconButton>
    </Box>
  );
}

export default Controller;
