import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import image from "../images/BMBF_Logo.png"

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


const BMBFCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >

            <CardMedia sx={{ display: 'flex', color: "white", textAlign: "center", padding: "2em", margin: "auto" }}
                component="img"
                image={image}
                alt="Logo for BMBF"
            />
            <CardContent>
                <Typography align="left" variant="body1" >
                    To learn more about the BMBF you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.bmbf.de/bmbf/de/home/home_node.html">
                        Learn More
                    </Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph align="left">
                        
                    The Federal Ministry of Education and Research, abbreviated BMBF, is a cabinet-level ministry of Germany. 
                    It is headquartered in Bonn, with an office in Berlin. The Ministry provides 
                    funding for research projects and institutions and sets general educational policy. It also provides student loans in Germany.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default BMBFCard;
