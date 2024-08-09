import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from  './digestion_light2.gif';

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


const ResearchPaperCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5}>
            <Box>
                <CardHeader
                    title="Take a look at our Research!"
                />
                <Divider />
            </Box>
            <CardMedia  sx={{  padding: "1em", width: "85%",
                margin: "0 auto"  }}
                component="img"
                image={image}
                alt="Enzymatic degredation gif"
            />
            <CardContent>
                <Typography padding="1em" align='left' variant="body1" >
                We study the plant cell wall synthesis and degredation, starch biogenesis, protein assembly, cytoskeletal transport, 
                glycogen dynamics and fatty acid synthesis... Take a look at our research!
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing  >


                    <Button sx={{ textAlign: "right" }} variant="contained"  component={Link} to="/research/">
                        Learn More
                    </Button>

                </CardActions>

            </Box>

        </Card >
    );
};

export default ResearchPaperCard;