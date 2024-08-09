import React from 'react';
import { Card, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from "@mui/material"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';


import LianneCard from '../components/people_cards/lianneCard';
import AdelaideCard from '../components/people_cards/adelaideCard';
import MerleCard from '../components/people_cards/merleCard';
import JasminCard from '../components/people_cards/jasminCard';
import AsmaCard from '../components/people_cards/asmaCard';
import ParthoCard from '../components/people_cards/parthoCard';
import TorbenCard from '../components/people_cards/torbenCard';

import background from '../components/images/background.png';
import groupphoto from  '../components/images/group3.jpg';

import EricCard from '../components/people_cards/ericCard';
import LauraCard from '../components/people_cards/lauraCard';
import MarcoCard from '../components/people_cards/marcoCard';

function GroupMembers(){
    return(
        <section>
            <div class="container-fluid">

                <Card sx={{ marginTop: "1em", position:"relative" }}>
                    <CardMedia
                        height="300"
                        component="h1"
                        sx={{ color: "white", textAlign: "center", padding: "1.5em", margin: "0" }}
                        image={background}
                        alt="binary"
                    >
                        <Typography variant="h2"> 
                        Group Members
                        </Typography>
                    </CardMedia>
                </Card>
            




                <p>
                    <AdelaideCard />
                </p>

              
                <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <ParthoCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <LianneCard />
                    </Grid>
                </Grid>
               
                <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <MerleCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <AsmaCard />

                    </Grid>
                </Grid>

        
                <Grid container justifyContent="space-around" marginBottom={"2em"} spacing={3} sx={{position:"relative", marginTop:"2em"}} >

                    <Grid item xs={12} sm={12} md={6}>
                    <MarcoCard />

                    </Grid>
                </Grid>

                <Grid container justifyContent="space-around" spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <JasminCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <TorbenCard />
                    </Grid>
                </Grid>

                <Grid container justifyContent="space-around" marginBottom={"2em"} spacing={3} sx={{position:"relative", marginTop:"2em"}} >
                    <Grid item xs={12} sm={12} md={6}>
                        <EricCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <LauraCard />
                    </Grid>
                </Grid>


                <Card>
                <CardHeader
                       title="Visiting Researchers"/>
        <Divider />

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                <ListItem>
                    <ListItemAvatar>
                    <PersonAddAltOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Evaldas Simanavicius, University of Manchester, United Kingdom" secondary="February 2023" />

                </ListItem>
                </List>
                </Card>





           
            </div>
        </section>
    );


}

export default GroupMembers;
