import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import ComputerIcon from '@mui/icons-material/Launch';
import Raguin2023Card from '../paper_cards/Raguin2023';
import McFarland2020Card from '../paper_cards/McFarland2020';
import image from '../transport_fig.png';


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


const TASEPCard = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ marginTop: "1em" }} style={{ position:"relative", minHeight: "10px", display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} elevation={5} >
            <Box>
                <CardHeader align="left"
                    title="Whole-translatome protein production and tRNA sequestration in yeast"
                />
                <Divider />
            </Box>
       


            <Box>
            <Divider/>
                <CardActions >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap">
                <Button variant="contained" startIcon={<DescriptionIcon />} href="https://doi.org/10.1093/nar/gkaa055">
                        Publication
                </Button>
                <Button variant="contained" startIcon={<ComputerIcon />} href="https://www.ebi.ac.uk/biomodels/MODEL2001080004#Overview">
                        software
                </Button>
                </Stack>
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
                <McFarland2020Card/>
                </CardContent>
            </Collapse>

        
        </Card >
    );
};

export default TASEPCard;