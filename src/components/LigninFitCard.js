import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';

import ligninfitlogo from './logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';


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


const LigninFitCard = () => {

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
                    title="LigninFit: A companion fitting and analysis package for Lignin-KMC"
                />
                </Grid>
                
            <Grid item xs={4} sm={3} md={2} l={1}>
                <CardMedia sx={{
                        padding: "1em", maxWidth: 600,
                        margin: "0 auto",
                    }}
                        component="img"
                        image={ligninfitlogo}
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
                <Button variant="contained" startIcon={<DescriptionIcon />} href="  ">
                        Publication
                </Button>

                <Button variant="contained" startIcon={<GitHubIcon />} href="https://github.com/LianneGahan/LigniFind">
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
                
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default LigninFitCard;