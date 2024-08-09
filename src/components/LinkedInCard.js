import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from '../components/linkedin.png';


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


const LinkedInCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Linked In"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 230,
                margin: "0 auto",
            }}
                component="img"
                image={LinkedInIcon}
                alt="Linked In Logo"
            />
            <CardContent>
                <Typography variant="body 1" >
                You can contact Dr Raguin <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography> linked in by clicking here. 
                </Typography>
            </CardContent>
            <Box>
            <Divider/>
                <CardActions >
                    <Button variant="contained" href="http://linkedin.com/in/ad%C3%A9la%C3%AFde-raguin">
                        To website
                    </Button>

                </CardActions>
            </Box>

        
        </Card >
    );
};

export default LinkedInCard;