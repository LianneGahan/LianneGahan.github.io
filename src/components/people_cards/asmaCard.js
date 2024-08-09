import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import photo from "./Asma-portraitformat.jpg";


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


const AsmaCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Asma Ben Janete"
                />
                <Divider />
            </Box>
            <CardContent>
            <Grid container spacing={1} alignItems="center"  justifyContent="space-around" >
                <Grid item xs={7} sm={12} md={3.5}>
                <CardMedia sx={{
                    padding: "1em", maxWidth: 280,
                    margin: "0 auto",
                }}
                    component="img"
                    image={photo}
                    alt="A smart photo of Asma Ben Janete"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7} >
              
                <Typography variant="body1" align='left' alignItems="center"  justifyContent="center">
                Asma is a Master's student in the Department of Computer Science. The focus of her studies is data engineering 
                and model simulations. Her Bachelor's thesis was about the dynamic motion of swarm robots and focussed on
                developing algorithms for self-organisation. She is currently working on developing numerical methods to investigate transport properties 
                at the crossing of one-dimensional lattices with complex kinetic rules at the junction.

                </Typography>
                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"} >
                    <Grid item>
                        <Button variant="outlined" startIcon={<LinkedInIcon />} size="large" href="https://www.linkedin.com/in/asma-ben-janete-05518a161">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" href="https://www.researchgate.net/profile/Asma-Ben-Janete">
                            Research Gate
                        </Button>
                    </Grid>
                </Grid>
           
                
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

export default AsmaCard;