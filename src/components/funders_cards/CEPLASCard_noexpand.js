import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const CEPLASCardnoexpand = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "250px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="We are funded by..."
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 800,
                margin: "0 auto",
            }}
                component="img"
                image="https://www.ceplas.eu/fileadmin/Resources/Public/Bootstrap/img/CEPLAS-Logo.svg"
                alt="Logo for CEPLAS"
            />
            <CardContent>
                <Typography variant="body1" >
                    We are funded by CEPLAS. To learn more about CEPLAS you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.ceplas.eu/en/home/">
                        Learn More
                    </Button>
                    
                </CardActions>
            </Box>
            
        </Card >
    );
};

export default CEPLASCardnoexpand;
