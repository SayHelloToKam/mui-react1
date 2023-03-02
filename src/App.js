import NavBar from "./components/NavBar";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBarLeft setMode={setMode} mode={mode} />
          <Feed />
          <SideBarRight />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
