import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

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


const BioSCCardnoexpand = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "250px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="We are funded by..."
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 400,
                margin: "0 auto",
            }}
                component="img"
                image="https://www.biosc.de/lw_resource/datapool/systemfiles/elements/images/691c994f-f902-11e6-8c78-dead53a91d31/current/image/BioSC-Logo-330x230.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body1" >
                    To learn more about BioSC you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.biosc.de/">
                        Learn More
                    </Button>
                    
                </CardActions>
            </Box>
            
        </Card >
    );
};

export default BioSCCardnoexpand;