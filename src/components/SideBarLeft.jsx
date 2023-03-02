import {
  Article,
  Diversity3,
  Duo,
  Home,
  ModeNight,
  Settings,
  Voicemail,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const SideBarLeft = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Voicemail />
              </ListItemIcon>
              <ListItemText primary='Audio' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary='Connections' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Duo />
              </ListItemIcon>
              <ListItemText primary='Video Call' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simpleList'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBarLeft;
