import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ComputerIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

import Rousset2023Card from '../paper_cards/Rousset2023';


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


const ThreeDimGlycogenCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Biogenesis of spatially resolved glycogen granules"
                />
                <Divider />
            </Box>
      
            <Box>
            <Divider/>
                <CardActions >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                <Button variant="contained" startIcon={<DescriptionIcon />} href="https://www.researchgate.net/publication/364921626_Stochastic_modelling_of_a_three-dimensional_glycogen_granule_synthesis_and_impact_of_the_branching_enzyme">
                        Publication
                </Button>
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://github.com/yvanrousset/Stochastic-modeling-of-a-three-dimensional-glycogen-granule">
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
                
                <Rousset2023Card/>
                </CardContent>
            </Collapse>
        
        </Card >
    );
};

export default ThreeDimGlycogenCard;