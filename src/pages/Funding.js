import React from 'react';
import { Card, Grid, Typography, Box } from '@mui/material';
import BioSCCard from '../components/funders_cards/BioSCCard';
import DFGCard from '../components/funders_cards/DFGCard';
import CEPLASCard from '../components/funders_cards/CEPLASCard';
import BMBFCard from '../components/funders_cards/bmbfCard';

function Funding() {
    return (
        <Box sx={{ padding: '2em', backgroundColor: '#f5f5f5' }}>
            {/* Header Card */}
            <Card sx={{ marginBottom: '2em', boxShadow: 3, borderRadius: 2 }}>
                <Box
                    sx={{
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#5F9EA0', // or any color you prefer
                        borderRadius: '2px',
                        textAlign: 'center',
                        padding: '1em'
                    }}
                >
                    <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Our work is supported by ...
                    </Typography>
                </Box>
            </Card>

            {/* Funders Cards */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DFGCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BioSCCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <BMBFCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <CEPLASCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Funding;
