import { Box } from "@mui/material";
import React from "react";

const SideBarRight = () => {
  return (
    <Box
      backgroundColor='lightGreen'
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      SideBarRight
    </Box>
  );
};

export default SideBarRight;
