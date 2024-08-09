import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import LinkedInCard from '../components/LinkedInCard';
import EmailCard from '../components/EmailCard';
import { Card, Grid, Typography, Box } from '@mui/material';

function Contact() {
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
                        backgroundColor: '#5F9EA0', // You can replace this with your desired color
                        borderRadius: '2px',
                        textAlign: 'center',
                        padding: '1em'
                    }}
                >
                    <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Contact and Social Media
                    </Typography>
                </Box>
            </Card>

            {/* Contact Cards */}
            <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: '2em' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <LinkedInCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <AboutUsCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <EmailCard />
                </Grid>
            </Grid>

            {/* Address Information */}
            <Card sx={{ padding: '2em', boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '1em' }}>
                    You can find us in the Computational Cell Biology Institute at Heinrich-Heine University
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Building 25.02, Level 02,<br />
                    Universitätsstraße 1,<br />
                    40225 Düsseldorf
                </Typography><p></p>
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '1em' }}>
                    ... Or at the Institut für Pharmazeutische und Medizinische Chemie at Heinrich-Heine University
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Geb. 26.23, Ebene 02, Raum 32<br />
                Universitätsstr. 1<br />
                40225 Düsseldorf
                </Typography>
            </Card>
        </Box>
    );
}

export default Contact;
