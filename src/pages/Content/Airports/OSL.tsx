import * as React from "react";
import { useState, useRef, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import {
  createTheme,
  ThemeProvider,
  PaletteMode,
} from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Slider,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  Settings,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import ToggleColorMode from "../../Auth/Functions/ToggleColorMode";
import { SitemarkIcon } from "../../Auth/Theme/CustomIcons";
import sound from "../../../assets/Music/Lofi1.mp3";

export const OSL = () => {
  const initialMode = (localStorage.getItem("theme") as PaletteMode) || "light";
  const [mode, setMode] = useState<PaletteMode>(initialMode);
  const defaultTheme = createTheme({ palette: { mode } });
  const [anchorEl, setAnchorEl] = useState(null);
  const [atcVolume, setAtcVolume] = useState(50);
  const [musicVolume, setMusicVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const atcAudioRef = useRef<HTMLAudioElement | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleAtcVolumeChange = (_event: any, newValue: number | number[]) => {
    setAtcVolume(newValue as number);
  };

  const handleMusicVolumeChange = (_event: any, newValue: number | number[]) => {
    setMusicVolume(newValue as number);
  };

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePlayPause = () => {
    const atcAudio = atcAudioRef.current;
    const musicAudio = musicAudioRef.current;
    if (isPlaying) {
      atcAudio?.pause();
      musicAudio?.pause();
    } else {
      atcAudio?.play();
      musicAudio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const atcAudio = atcAudioRef.current;
    const musicAudio = musicAudioRef.current;
    if (atcAudio && musicAudio) {
      atcAudio.volume = atcVolume / 100;
      musicAudio.volume = musicVolume / 100;
    }
  }, [atcVolume, musicVolume]);

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
            <div style={{ position: "relative", top: "7px" }}>
              <SitemarkIcon />
            </div>
          </Link>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              <Typography variant="subtitle1">ATC Volume</Typography>
              <Box sx={{ width: 200 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="ATC Volume"
                    value={atcVolume}
                    onChange={handleAtcVolumeChange}
                    min={0}
                    max={100}
                  />
                  <VolumeUp />
                </Stack>
              </Box>
            </MenuItem>
            <MenuItem>
              <Typography variant="subtitle1">Music Volume</Typography>
              <Box sx={{ width: 200 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <VolumeDown />
                  <Slider
                    aria-label="Music Volume"
                    value={musicVolume}
                    onChange={handleMusicVolumeChange}
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
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <Settings />
          </IconButton>

          <Typography variant="h4">OSL</Typography>
          <Typography variant="h6">Oslo International Airport</Typography>
          <audio
            ref={atcAudioRef}
            src="https://s1-lhr.liveatc.net/eneg2"
          />
          <audio ref={musicAudioRef} src={sound} />

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
