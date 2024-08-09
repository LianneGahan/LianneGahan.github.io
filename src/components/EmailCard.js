import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import EmailIcon from '../components/email.png';
import EmailOpenIcon from '../components/emailopen.png';
import React, { useState, useEffect } from 'react';


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


const EmailCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >
            <Box>
                <CardHeader
                    title="Email"
                />
                <Divider />
            </Box>
            <CardMedia sx={{
                padding: "1em", maxWidth: 230,
                margin: "0 auto",
            }}
                component="img"
                image={EmailIcon}
                alt="Email icon"
            />
            <CardContent>
                <Typography variant="body1" >
                You can contact Dr Raguin <Typography style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography> email at adelaide.raguin@hhu.de
                </Typography>
            </CardContent>
            <Box>
            <Divider/>
                <CardActions >
                    <Button variant="contained"  onClick={() =>  navigator.clipboard.writeText('adelaide.raguin@hhu.de')}>
                        Copy Email
                        
                    </Button>

                </CardActions>
            </Box>

        
        </Card >
    );
};

export default EmailCard;