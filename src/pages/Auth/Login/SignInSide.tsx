import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import ToggleColorMode from '../Functions/ToggleColorMode';
import SignInCard from './SignInCard';
import Content from './Content';

export default function SignInSide() {
  const initialMode = localStorage.getItem('theme') as PaletteMode || 'light';
  const [mode, setMode] = React.useState<PaletteMode>(initialMode);
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      // Save the new theme to local storage
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))'
              : 'linear-gradient(0deg, rgba(0,11,59,1) 37%, rgba(14,0,27,1) 74%)',
          backgroundSize: 'cover',
          height: { xs: 'auto', md: '100dvh' },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >



        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            position: { sm: 'static', md: 'fixed' },
            width: '100%',
            p: { xs: 2, sm: 4 },
          }}
        >
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Stack>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: '100%', md: '100dvh' }, p: 2 }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}