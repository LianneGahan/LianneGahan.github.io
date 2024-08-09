import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import photo from './Marco.jpg';
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


const MarcoCard = () => {

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {

        setExpanded(!expanded);
    };

    return (
        <Card style={{ position:"relative", minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Marco Lapsien"
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
                alt="A smart photo of Marco Lapsien"
                />
                </Grid>
                <Grid item xs={12} sm={12} md={7}>

                <Typography variant="body1" align='left' >
                Marco obtained his Bachelor's degree at the Julius-Maximilians university in Würzburg. 
                There he developed an interest for computer aided research, when he was working in the field 
                of crystallography based protein structure determination. Pursuing this interest, he is currently 
                investigating the physicochemical
                 properties of lignin polymers via molecular dynamics simulation as part of his Master's degree.

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

export default MarcoCard;