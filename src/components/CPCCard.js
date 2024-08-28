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

const ComputationalPharmaceuticalChemistryCard = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card style={{ minHeight: "550px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5}>
            <Box>
                <CardHeader
                    title="Computational Pharmaceutical Chemistry Group"
                />
                <Divider />
            </Box>

            <CardMedia sx={{
                padding: "1em", maxHeight: 250,
                margin: "0 auto",
                width: "auto",
                height: "auto"
            }}
                component="img"
                image="https://www.pharmazie.hhu.de/fileadmin/_processed_/1/3/csm_CPC_darker_3b15810371.jpg" // Replace with the actual image URL
                alt="Pharmaceutical Chemistry Group Logo"
            />
            <CardContent>
                <Typography variant="body1" align="left">
                    We are part of the Computational Pharmaceutical Chemistry Group, located within the Department of Pharmaceutical Sciences at Heinrich-Heine University Düsseldorf.
                </Typography>
            </CardContent>

            <Box>
                <Divider />
                <CardActions>
                    <Button variant="contained" href="https://cpclab.uni-duesseldorf.de/index.php/" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default ComputationalPharmaceuticalChemistryCard;
