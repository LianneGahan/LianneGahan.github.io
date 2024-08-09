import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
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


const AdelaideCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginTop: "2em" }} style={{position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Dr Adélaïde Raguin"
                />
                <Divider />
            </Box>
            <CardContent>
            <Grid container  spacing={1} alignItems="center" justifyContent="center">
                <Grid item xs={7} sm={12} md={3.5}>
                <CardMedia sx={{
                    padding: "1em", maxWidth: 280,
                    margin: "0 auto",
                }}
                    component="img"
                    image="https://www.cs.hhu.de/fileadmin/_processed_/1/4/csm_raguin_2022_e033e28c17.jpg"
                    alt="A smart photo of Dr Adelaide Raguin"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                
                <Typography align='left' variant="body1" >
                <p>Dr Adélaïde Raguin studied Physics at the University of Montpellier, where she received her PhD in theoretical Physics in 
                December 2013, for her research on statistical methods to model transport at network junctions, motivated by the cytoskeletal 
                transport, under the supervision of Prof. Andrea Parmeggiani and Dr Norbert Kern. For her postdoctoral studies she first 
                joined the team of Prof. Carmen Romano at King's College, University of Aberdeen, and then the group of Prof. Oliver Ebenhöh 
                in Düsseldorf. Since 2021, she established her independent research team, funded on third party funding, at Heinrich-Heine 
                University Düsseldorf.</p>
                <p>In parallel with her research and supervision activities, Dr Adélaïde Raguin has been involved in large amounts of Physics 
                and Mathematics teaching, including a  <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>Monitorat </Typography> during the three years of her PhD. She currently leads the 
                module "Stochastic Models of Biological Systems" in the Master's degree of Computer Sciences at Heinrich-Heine University Düsseldorf.</p>

                </Typography>
                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"}>
                    <Grid item>
                        <Button variant="outlined" size ="large" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/ad%C3%A9la%C3%AFde-raguin/">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" href="https://www.researchgate.net/profile/Adelaide-Raguin">
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

export default AdelaideCard;


