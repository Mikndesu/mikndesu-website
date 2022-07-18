import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { margin } from "@mui/system";

const Header = () => {
    return (
        <Box>
            <AppBar position="static" style={{ backgroundColor: "#708090" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{margin:"200"}}>
                        Mikndesu's Mods
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;