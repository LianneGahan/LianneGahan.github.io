import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Behle2021Card from '../components/paper_cards/Behle2021';
import PREDIGCard from '../components/software_cards/predigCard';
import McFarland2020Card from '../components/paper_cards/McFarland2020';
import Rousset2023Card from '../components/paper_cards/Rousset2023';
import Raguin2023Card from '../components/paper_cards/Raguin2023';
import ExpressInHostCard from '../components/software_cards/ExpressInHostCard';
import ThreeDimGlycogenCard from '../components/software_cards/threedimGlycogenCard';
import TASEPCard from '../components/software_cards/TASEPCard';
import background from '../components/images/background.png';


function Teaching(){
    return(
        <section>
        <div class="container-fluid">
        
            <Card sx={{ marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", margin: "0" }}
                        image={background}
                        alt="A field of corn"
                    >
                        <Typography variant="h2"> 
                        Open Source Softwares
                        </Typography>
                    </CardMedia>

            </Card>
            <Card  sx={{marginTop: "2em", position:"relative" }}>
            <Typography variant="body1" sx={{ textAlign: "left", margin: "1em", position: "relative", display: { xs: "block", sm: "block", md: "none" } }}>
            We have developed several softwares that are now available <Typography variant="body1" style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography>  web-servers and Github repositories. These softwares are open source and licensed.
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "left", margin: "1em", position: "relative", display: { xs: "none", sm: "none", md: "block" } }}>
            We have developed several softwares that are now available <Typography variant="h5" style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography>  web-servers and Github repositories. These softwares are open source and licensed.
            </Typography>
            </Card>
            <p>
            <ExpressInHostCard/>
            </p>
             <p>
            <PREDIGCard/>
            </p>
            <p>
            <ThreeDimGlycogenCard/>
            </p>
            <p>
            <TASEPCard/>
            </p>
  
        
        </div>
        </section>
    );


}

export default Teaching;