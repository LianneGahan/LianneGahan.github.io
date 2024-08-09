import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import photo from '../images/Laura.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";


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


const LauraCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Laura Randarevitch (Alumni)"
                />
                <Divider />
            </Box>

            <CardContent>
            <Grid container  spacing={1} alignItems="center"  justifyContent="space-around">
                <Grid item xs={7} sm={12} md={3.5}>
                <CardMedia sx={{
                    padding: "1em", maxWidth: 350,
                    margin: "0 auto",
                }}
                    component="img"
                    image={photo}
                alt="A smart photo of Laura"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <Typography variant="body1" align='left' >
                As a CEPLAS Graduate School student, Laura did a lab rotation in Dr Raguin's team in Spring 2022, 
                during which she implemented simple stochastic models of protein production.

                </Typography>
                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"} >
                    <Grid item>
                        <Button variant="outlined" startIcon={<LinkedInIcon />} size="large" href="https://www.linkedin.com/in/laura-alexandra-randarevitch-4bb260253">
                            LinkedIn
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

export default LauraCard;