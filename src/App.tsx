import { Box, Stack } from "@mui/material";
import { RoutesWrapper } from "./RoutesWrapper";


export const App = () => (
  <Stack minHeight="100vh">
    <Box flexGrow={1}>
      <RoutesWrapper />
    </Box>
  </Stack>
);
