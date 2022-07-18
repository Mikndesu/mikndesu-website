import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { margin } from "@mui/system";

const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{backgroundColor:"#708090"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1, paddingLeft:"300px"}}>
                        Mikndesu's Mods
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;