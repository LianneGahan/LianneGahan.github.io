import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import photo from './Lianne-portraitformat2.jpg';
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


const LianneCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Dr Lianne Gahan"
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
                alt="A smart photo of Dr Lianne Gahan"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <Typography variant="body1" align='left' >
                Lianne is in her first postdoctoral position at Heinrich-Heine University after completing her PhD in computational biophysics at the University of Sheffield, 
                where she also completed her undergraduate degree in Theoretical Physics (MPhys). She is now working on a computational project
                at the interface of physics and biology, where she is using stochastic simulations to investigate 
                    the impact of microscopic properties of the xylem cell wall on its ability to transport water. 

                </Typography>
                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"} >
                    <Grid item>
                        <Button variant="outlined" startIcon={<LinkedInIcon />} size="large" href="https://www.linkedin.com/in/liannegahan/">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" href="https://www.researchgate.net/profile/Lianne-Gahan">
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

export default LianneCard;