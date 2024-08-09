
import { Box, Button, Typography, Toolbar } from '@mui/material';

const Footer = () => {

    return (
        <>
            <Toolbar disableGutters  >
            <Typography align="center" variant="body1" margin="1em">
                    Website built by Lianne Gahan and Marco Lapsien
                    </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "flex-end", }}>
                    
                    <Button sx={{ color: "black" }} size="small" href="https://www.hhu.de/impressum" variant="outline" color="primary">Impressum</Button>
                    <Button sx={{ color: "black" }} size="small" href="https://www.hhu.de/datenschutzerklaerung" variant="outline" color="primary">Data Privacy</Button>
                </Box>
            </Toolbar>
        </>

    )
}
export default Footer;