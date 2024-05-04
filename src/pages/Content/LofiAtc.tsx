import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { Box, Typography, IconButton, Link, Menu, MenuItem } from "@mui/material";
import { PlayArrow, Pause, Settings } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import ToggleColorMode from "../Auth/Functions/ToggleColorMode";
import { SitemarkIcon } from '../Auth/Theme/CustomIcons';

export const LofiAtc = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleChange = (_event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };



  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; // Convert the volume to a scale of 0 to 1
    }
  }, [volume]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === "light"
              ? "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))"
              : "linear-gradient(0deg, rgba(0,11,59,1) 37%, rgba(14,0,27,1) 74%)",
          backgroundSize: "cover",
          height: { xs: "auto", md: "100dvh" },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >
        

        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            position: { sm: "static", md: "fixed" },
            width: "100%",
            p: { xs: 2, sm: 4 },
          }}
        >
  <Link href="/">
  <div style={{ position: 'relative', top: '7px' }}>
    <SitemarkIcon />
  </div>
</Link>
          
          <IconButton onClick={handleMenuOpen}>
            <Settings />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              <Box sx={{ width: 200 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="Volume"
                    value={volume} // Use 'volume' for the Slider value
                    onChange={handleChange}
                    min={0}
                    max={100}
                  />
                  <VolumeUp />
                </Stack>
              </Box>
            </MenuItem>
          </Menu>
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "25vh",
            width: "450px",
            background:
              "linear-gradient(177deg, rgba(63,98,251,1) 22%, rgba(164,70,252,1) 100%)",
            borderRadius: "12px",
            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h4">KORD</Typography>
          <Typography variant="h6">O'Hare International Airport</Typography>
          <audio
            ref={audioRef}
            src="https://s1-bos.liveatc.net/kord7"
          />
          <IconButton onClick={handlePlayPause}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
        </Box>

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: "100%", md: "100dvh" }, p: 2 }}
        ></Stack>
      </Stack>
    </ThemeProvider>
  );
};
