import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';

const monolignolOptions = ['S', 'G', 'H'];
const bondOptions = ['B-O-4', 'B-B', 'B-5', '5-5', 'A-O-4', '4-O-5', 'B-1'];

const DynamicLigninBuilderCard = () => {
    const [sequence, setSequence] = useState([]);
    const [nextItem, setNextItem] = useState('monolignol'); // To track if the next item should be monolignol or bond

    const addMonolignol = (monolignol) => {
        if (nextItem === 'monolignol') {
            setSequence([...sequence, { type: 'monolignol', value: monolignol }]);
            setNextItem('bond'); // Next should be a bond
        } else {
            console.log('Please add a bond before adding another monolignol.');
        }
    };

    const addBond = (bond) => {
        if (nextItem === 'bond' && sequence.length > 0 && sequence[sequence.length - 1].type === 'monolignol') {
            setSequence([...sequence, { type: 'bond', value: bond }]);
            setNextItem('monolignol'); // Next should be a monolignol
        } else {
            console.log('Please add a monolignol before adding a bond.');
        }
    };

    return (
        <Card sx={{ margin: 'auto', marginTop: '2em' }}>
            <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                    Build Your Lignin Molecule
                </Typography>

                <Box sx={{ marginBottom: '1em' }}>
                    <Typography variant="h6" component="div">
                        Select Monolignol
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '1em', marginTop: '0.5em' }}>
                        {monolignolOptions.map((monolignol) => (
                            <Button
                                key={monolignol}
                                variant="contained"
                                color="primary"
                                onClick={() => addMonolignol(monolignol)}
                                disabled={nextItem !== 'monolignol'}
                            >
                                {monolignol}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ marginBottom: '1em' }}>
                    <Typography variant="h6" component="div">
                        Select Bond
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '1em', flexWrap: 'wrap', marginTop: '0.5em' }}>
                        {bondOptions.map((bond) => (
                            <Button
                                key={bond}
                                variant="outlined"
                                color="secondary"
                                onClick={() => addBond(bond)}
                                disabled={nextItem !== 'bond'}
                            >
                                {bond}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ marginTop: '1em' }}>
                    <Typography variant="h6" component="div">
                        Lignin Molecule
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em', marginTop: '1em' }}>
                        {sequence.map((item, index) => (
                            <Chip
                                key={index}
                                label={item.value}
                                color={item.type === 'monolignol' ? 'primary' : 'secondary'}
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default DynamicLigninBuilderCard;
