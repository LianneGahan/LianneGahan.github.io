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


const DFGCard = () => {


    return (
        <Card style={{ minHeight: "300px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="We are funded by..."
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 500,
                margin: "0 auto",
            }}
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/DFG-logo-blau.svg/2000px-DFG-logo-blau.svg.png"
                alt="Logo for the DFG"
            />
            
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.dfg.de/en/index.jsp">
                        Learn More
                    </Button>
                    
                </CardActions>
            </Box>
            
        </Card >
    );
};

export default DFGCard;
