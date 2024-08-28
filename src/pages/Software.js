import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import LigninFitCard from '../components/LigninFitCard';



function Software(){
    return(
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
                        Softwares used here...
                    </Typography>
                </Box>
            </Card>
            <Card  sx={{marginTop: "2em", position:"relative" }}>
            <Typography variant="body1" sx={{ textAlign: "left", margin: "1em", position: "relative", display: { xs: "block", sm: "block", md: "none" } }}>
            We have developed several softwares that are now available <Typography variant="body1" style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography>  web-servers and Github repositories. These softwares are open source and licensed.
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "left", margin: "1em", position: "relative", display: { xs: "none", sm: "none", md: "block" } }}>
            We have developed several softwares that are now available <Typography variant="h5" style={{display:'inline-flex'}} sx={{fontStyle: 'italic'}}>via </Typography>  web-servers and Github repositories. These softwares are open source and licensed.
            </Typography>
            </Card>
            <LigninFitCard/>
            </Box>

  
        
    );


}

export default Software;