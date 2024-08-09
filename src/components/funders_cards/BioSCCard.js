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


const BioSCCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "500px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column', position:"relative" }} elevation={5} >

            <CardMedia  sx={{ display: 'flex', color: "white", textAlign: "center", padding: "2em", margin: "auto" }}
                component="img"
                image="https://www.biosc.de/lw_resource/datapool/systemfiles/elements/images/691c994f-f902-11e6-8c78-dead53a91d31/current/image/BioSC-Logo-330x230.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography align="left" variant="body1" >
                    To learn more abou the BioSC you can visit their homepage linked below.
                </Typography>
            </CardContent>
            <Box>
                <Divider />
                <CardActions disableSpacing>
                    <Button variant="contained" href="https://www.biosc.de/">
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
                    The Bioeconomy Science Center is based on an integrative structure consisting of basic, applied, and industry-oriented research, 
                    including the natural, engineering, and economic sciences, and is focussed on the mission of sustainable bioeconomy on the pillars 
                    of the science system. The BioSC currently consists of around 1900 employees from 67 member institutes from the partner organisations: 
                    the RWTH Aachen University, 
                    the Heinrich Heine University Düsseldorf, the Friedrich Wilhelms University in Bonn, and the Forschungszentrum Jülich.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
};

export default BioSCCard;