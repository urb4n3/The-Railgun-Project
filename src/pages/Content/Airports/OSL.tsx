import { Box, Typography } from "@mui/material";

export const OSL = () => (
  <Box pt={8}>
    <Typography>Lofi Atc</Typography>
    <audio controls>
      <source src="https://www.lofiatc.com/s1-bos.liveatc.net/kord7" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </Box>
);

