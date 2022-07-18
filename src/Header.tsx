import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Mikndesu's Mods</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;