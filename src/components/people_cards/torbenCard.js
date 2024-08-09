import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import image from './torben.jpg';
import { Link } from "react-router-dom";
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';



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


const TorbenCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{position:"relative",  minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Torben Glass (Alumni)"
                />
                <Divider />
            </Box>
            <CardContent>
            <Grid container justifyContent="space-around" alignItems="center" spacing={1} >
                <Grid item xs={7} sm={12} md={3.5}>
                <CardMedia sx={{
                    padding: "1em", maxWidth: 350,
                    margin: "0 auto",
                }}
                    component="img"
                image={image}
                alt="A smart photo of Torben Glass sitting on a wall"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7} >

                <Typography variant="body1" align='left'>
                Torben is currently working on the BioSC funded PREDIG project, for which we develop a modelling software to predict the enzymatic digestion of 
                lignocellulostic biomass for biorefinery approaches. He is developing the online interface and release of the software.

                </Typography>

                </Grid>

            </Grid>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                <Stack direction="row" spacing={2}>

                <Button variant="contained" component={Link} to="/research">
                            Research Projects
                    </Button>
                    <Button variant="contained" component={Link} startIcon={<ComputerIcon />} href="https://predig.cs.hhu.de/">
                            PREDIG
                    </Button>
                    </Stack>
                    
                </CardActions>
            </Box>
            </Card >
    );
};

export default TorbenCard;


