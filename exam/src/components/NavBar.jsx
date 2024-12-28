import { AppBar, Toolbar, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import ContactsIcon from '@mui/icons-material/Contacts';
import DrawerComp from "./Drawer";
import React from 'react';

function NavBar() {
   
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);
    return (
        <React.Fragment>
            
            <AppBar position="static" color="primary" >
                <Toolbar>
                    {isMatch ? (
                        <>
                            <Button
                                LinkComponent={NavLink}
                                to="/"
                                style={({ isActive }) => {
                                    return { backgroundColor: isActive ? "darkblue" : "" };
                                }}
                                sx={{ color: "white", mx: 2 }}

                            >
                                <ContactsIcon sx={{ m: 2 }} />
                                <Typography >
                                    Contact Menager
                                </Typography>
                            </Button>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                    <Button 
                        LinkComponent={NavLink}
                        to="/"
                        style={({ isActive }) => {
                            return { backgroundColor: isActive ? "darkblue" : "" };
                        }}
                        sx={{ color: "white", mx: 2 }}

                    >
                        <ContactsIcon sx={{ m: 2 }} />
                        <Typography >
                            Contact Menager
                        </Typography>
                    </Button>

                    <Button
                        LinkComponent={NavLink}
                        to="/components/Categories"
                        style={({ isActive }) => {
                            return { backgroundColor: isActive ? "darkblue" : "" };
                        }}
                        sx={{ color: "white" }}
                    >
                        Categories
                    </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

export default NavBar;