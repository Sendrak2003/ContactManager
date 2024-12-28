import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
          PaperProps={{
            style: {
              backgroundColor: '#4791db',
              height: 100
            }
          }}
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
           <ListItemButton
                LinkComponent={NavLink}
                to="/components/Categories"
                style={({ isActive }) => {
                    return { backgroundColor: isActive ? "darkblue" : "" };
                }}
                sx={{ color: "white" }}
                onClick={() => setOpenDrawer(false)}
           >
              <ListItemIcon sx={{ color: "white" }}>
                <ListItemText>Categories</ListItemText>
              </ListItemIcon>
           </ListItemButton>
           <ListItemButton
                LinkComponent={NavLink}
                to="/components/ListContacts"
                style={({ isActive }) => {
                    return { backgroundColor: isActive ? "darkblue" : "" };
                }}
                sx={{ color: "white" }}
                onClick={() => setOpenDrawer(false)}
           >
              <ListItemIcon sx={{ color: "white" }}>
                <ListItemText>List Contacts</ListItemText>
              </ListItemIcon>
           </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
