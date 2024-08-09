import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import LigninBondCard from '../components/lignin_cards/LigninFitInputCard';
import LigninGeneratorCard from '../components/lignin_cards/GUICard';
import DynamicLigninBuilderCard from '../components/lignin_cards/dynamicGUIcard';

function Home() {
  return (
    <section>
      <Box 
        sx={{
          backgroundImage: 'url(/path-to-your-background-image.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '2em',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card 
          sx={{
            padding: '2em',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
            boxShadow: 3,
          }}
        >
          <Typography variant="h1" sx={{ textAlign: "center", marginBottom: "0.5em" }}>
            LigniFind
          </Typography>
          <Typography variant="h2" sx={{ textAlign: "center", marginBottom: "2em" }}>
            A computational toolkit for building lignin samples
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "2em" }}>
            With this computational toolkit you can obtain lignin structures based on a target distribution using LigninFit, and convert your structures
            into MD-ready formats compatible with AMBER and other molecular dynamics software.
          </Typography>
        </Card>
      </Box>
      <LigninBondCard/>
        <LigninGeneratorCard />
        <DynamicLigninBuilderCard/>


    </section>
  );
}

export default Home;
