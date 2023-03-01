import NavBar from "./components/NavBar";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SideBarLeft />
        <Feed />
        <SideBarRight />
      </Stack>
    </Box>
  );
}

export default App;
