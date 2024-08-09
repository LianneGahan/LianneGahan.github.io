import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ComputerIcon from '@mui/icons-material/ComputerTwoTone';

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


const ParthoCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Dr Partho Sakha De"
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
                    image="https://www.cs.hhu.de/fileadmin/_processed_/a/e/csm_Partho_2022_da300fefee.jpg"
                alt="A smart photo of Dr Partho Sakha De"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <Typography variant="body1" align='left' >
                Partho is a postdoctoral researcher with a PhD in biophysics. Before joining Dr Raguin's research group, 
                he completed his PhD at the Indian Institute of Science Education and Research Kolkata, 
                India. During his PhD, Partho worked on mathematical and computational modelling of the dynamics at the leading edge 
                of a crawling eukaryotic cell, with a special focus on the emergent 'stick-slip' phenomena. He is
                now working on the development of PREDIG - a computational tool to predict the enzymatic saccharification of 
                lignocellulosic biomass. 
                </Typography>

                <Grid container  spacing={1} alignItems="center" justifyContent="center" marginTop={"1em"}>
                    <Grid item>
                        <Button variant="outlined" size ="large" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/partho-sakha-de-21827917b/">
                            LinkedIn
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" href="https://www.researchgate.net/profile/Parthosakha-De">
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
                <Stack direction="row" spacing={2}>

                <Button variant="contained" component={Link} to="/research">
                            Research Projects
                    </Button>
                    <Button variant="contained" component={Link} startIcon={<ComputerIcon />} href="https://predig.cs.hhu.de/">
                            PREDIG
                    </Button>
                    </Stack>
                </CardActions>
            </Box>

        </Card>
    );
};

export default ParthoCard;


