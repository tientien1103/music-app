import useMusicPlayer from "../hooks/useMusicPlayer";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "3px 6px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "black",
  backgroundColor: "#fbe7e6",
  borderColor: "#fbe7e6",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ff7961",
    borderColor: "#ff7961",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fe3222",
    borderColor: "#ff5840",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgb(255,140,25)",
  },
});
function Tracklist() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();
  console.log(trackList);
  return (
    <>
      <Typography sx={{ mt: 2 }}>{currentTrackName}</Typography>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)(
        <Box key={index} onClick={() => playTrack(index)}>
          <BootstrapButton
            value={track.file}
            color="success"
            variant="contained"
          >
            {isPlaying && currentTrackIndex === index ? (
              <HeadphonesIcon />
            ) : (
              <PlayArrowIcon />
            )}
            {track.name}
          </BootstrapButton>
        </Box>
      ))}
    </>
  );
}

export default Tracklist;
