import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { PaletteMode, Typography, Link, Button, Card as MuiCard } from '@mui/material';
import { SitemarkIcon } from './Auth/Theme/CustomIcons';


import ToggleColorMode from "../pages/Auth/Functions/ToggleColorMode";

export const HomePage = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };


  const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    gap: theme.spacing(4),
    width: '100%',
    padding: theme.spacing(2),
    boxShadow:
      theme.palette.mode === 'light'
        ? 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px'
        : 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
      width: '450px',
    },
  }));

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
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Stack>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: "100%", md: "100dvh" }, p: 2 }}
        >
          
          
          
          
          
          
          <Card>
          
          <Button
                variant="contained"
                href="/Login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                href="/Register"
              >
                Register
              </Button>
              <Button
                variant="contained"
                href="/LofiAtc"
              >
                Lofi Atc
              </Button>
          </Card>









        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
