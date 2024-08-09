import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import photo from './Jasmin-portraitformat.jpg';

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


const JasminCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Jasmin Theilmann (Alumni)"
                />
                <Divider />
            </Box>
            <CardContent>
            <Grid container alignItems="center"  justifyContent="space-around" spacing={1} >
                <Grid item xs={7} sm={12} md={3.5}>
                <CardMedia sx={{
                    padding: "1em", maxWidth: 280,
                    margin: "0 auto",
                }}
                component="img"
                image={photo}
                alt="A smart photo of Jasmin Theilmann"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7} >
                
                <Typography variant="body1" align='left'  >
                Jasmin studied for her Bachelor's degree at the Institute for Applied Physics at Heinrich-Heine University and is currently completing 
                her Master's degree within Dr Raguin's team. She is working on optimising a fitting algorithm to compare stochastic simulations 
                and quantitative experimental data for the saccharification of cell wall biomass from maize mutants. 
                </Typography>
                

                </Grid>

            </Grid>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                <Button variant="contained" component={Link} to="/research">
                            Research Projects
                    </Button>
                </CardActions>
            </Box>


            </Card >
    );
};

export default JasminCard;