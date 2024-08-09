import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import photo from '../images/Eric.jpeg';
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


const EricCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Eric Behle (Alumni)"
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
                alt="A smart photo of Eric"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <Typography variant="body1" align='left' >
                From September 2019, Eric did his Master's degree thesis under the supervision of Dr Raguin, 
                with who he worked afterwards as a research assistant. During the whole period, Eric developed
                 the first version of the Plant Cell Wall Simulation model. He later took a PhD position at the Research Center of Jülich.


                </Typography>
                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"} >
                    <Grid item>
                        <Button variant="outlined" startIcon={<LinkedInIcon />} size="large" href="https://www.linkedin.com/in/eric-behle-774b17151">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" href="https://www.researchgate.net/profile/Eric-Behle">
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

export default EricCard;