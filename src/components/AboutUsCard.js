import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
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


const AboutUsCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader
                    title="Computational Cell Biology Institute"
                />
                <Divider />
            </Box>




            <CardMedia sx={{
                padding: "1em", maxHeight: 400,
                margin: "0 auto",
                width: "auto",
                height: "auto"
            }}
                component="img"
                image="https://www.cs.hhu.de/fileadmin/_processed_/3/a/csm_ccb_logo-2.1.1_p_2100x2970_828f919ad0.png"
                alt="CCB Logo"
            />
            <CardContent>
                <Typography variant="body1" align="left" >
                    We are hosted by the Computational Cell Biology Institute, which is located in the Computer Science Department at Heinrich-Heine University Düsseldorf.
                </Typography>
            </CardContent>

            <Box>
                <Divider />
                <CardActions >
                    <Button variant="contained" href="https://www.cs.hhu.de/lehrstuehle-und-arbeitsgruppen/computational-cell-biology">
                        Learn More
                    </Button>

                </CardActions>
            </Box>

        </Card >
    );
};

export default AboutUsCard;