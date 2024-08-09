import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';

import prediglogo from '../PREDIGLOGO.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import Behle2021Card from '../paper_cards/Behle2021';



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


const PREDIGCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{  marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
            <Grid container alignItems="center"  justifyContent="space-around"  >
            <Grid item xs={8} sm={9} md={10} l={11}>

                <CardHeader align="left"
                    title="PREDIG: a web application to simulate, fit experimental data, and optimise reaction conditions for the saccharification of plant biomass, lignocellulose"
                />
                </Grid>
                
            <Grid item xs={4} sm={3} md={2} l={1}>
                <CardMedia sx={{
                        padding: "1em", maxWidth: 200,
                        margin: "0 auto",
                    }}
                        component="img"
                        image={prediglogo}
                        alt=" lorem ipsum."
                    />
                </Grid>
                
                </Grid>
                 
                <Divider />
            </Box>
                
                   
            


            <Box>
            <Divider/>
                <CardActions >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                <Button variant="contained" startIcon={<DescriptionIcon />} href="https://doi.org/10.1371/journal.pcbi.1009262">
                        Publication
                </Button>
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://predig.cs.hhu.de/">
                        Web App
                </Button>
                <Button variant="contained" startIcon={<GitHubIcon />} href="https://gitlab.com/erbeh/pcwsm">
                        GitHub
                </Button>
                </Stack>
                <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                
                <Behle2021Card/>
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default PREDIGCard;