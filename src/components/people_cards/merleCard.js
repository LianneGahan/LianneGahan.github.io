import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import photo from './Merle-portraitformat.jpg';


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


const MerleCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{position:"relative",  minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Merle Stein"
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
                    image={photo}
                    alt="A smart photo of Merle Stein"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7} >

                <Typography variant="body1" align='left' >
                Merle completed her Bachelor's degree in quantitative biology at Heinrich-Heine University. She worked with crops 
                before discovering her interest in modelling techniques, which are the focus of her PhD project. Merle is working 
                on a CEPLAS funded PhD project about modelling gene expression 
                regulation at the whole-translatome scale under controlled optogenetic perturbation.

                </Typography>
                <p>
                    
                </p>
                <Button variant="outlined" startIcon={<LinkedInIcon />} size="large" href="https://www.linkedin.com/in/merle-stein-304403259">
                            LinkedIn
                </Button>
                </Grid>

            </Grid>
            </CardContent>
            <Box alignItems="center">
                <Divider />
                <CardActions>
                   
                        <Button variant="contained" component={Link} to="/research">
                            Research Projects
                    </Button>
                   

                </CardActions>
            </Box>

        </Card >
    );
};

export default MerleCard;