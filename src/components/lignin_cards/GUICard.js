import React, { useState } from 'react';
import { Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Button, Box, Grid, Checkbox, ListItemText } from '@mui/material';

const bonds = ['B-O-4', 'B-B', 'B-5', '5-5', 'A-O-4', '4-O-5', 'B-1'];

const LigninGeneratorCard = () => {
    const [monolignols, setMonolignols] = useState(['', '', '']);
    const [selectedBonds, setSelectedBonds] = useState([]);
    const [ligninString, setLigninString] = useState('');

    const handleMonolignolChange = (index, event) => {
        const newMonolignols = [...monolignols];
        newMonolignols[index] = event.target.value;
        setMonolignols(newMonolignols);
    };

    const handleBondChange = (event) => {
        setSelectedBonds(event.target.value);
    };

    const generateLigninString = () => {
        let result = monolignols.filter(Boolean).join('-');
        if (selectedBonds.length) {
            result += ' | ' + selectedBonds.join(', ');
        }
        setLigninString(result);
    };

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: '2em' }}>
            <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                    Build Your Lignin Molecule
                </Typography>
                <Box sx={{ marginBottom: '1em' }}>
                    <Typography variant="h6" component="div">
                        Select Monolignol Types
                    </Typography>
                    <Grid container spacing={2}>
                        {monolignols.map((monolignol, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <FormControl fullWidth>
                                    <InputLabel>Monolignol {index + 1}</InputLabel>
                                    <Select
                                        value={monolignol}
                                        onChange={(event) => handleMonolignolChange(index, event)}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="S">S (Syringyl)</MenuItem>
                                        <MenuItem value="G">G (Guaiacyl)</MenuItem>
                                        <MenuItem value="H">H (Hydroxyphenyl)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ marginBottom: '1em' }}>
                    <Typography variant="h6" component="div">
                        Select Bonds
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel>Bonds</InputLabel>
                        <Select
                            multiple
                            value={selectedBonds}
                            onChange={handleBondChange}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {bonds.map((bond) => (
                                <MenuItem key={bond} value={bond}>
                                    <Checkbox checked={selectedBonds.indexOf(bond) > -1} />
                                    <ListItemText primary={bond} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={generateLigninString}
                >
                    Generate Lignin String
                </Button>

                {ligninString && (
                    <Typography variant="h6" component="div" sx={{ marginTop: '1em' }}>
                        Lignin String: <strong>{ligninString}</strong>
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default LigninGeneratorCard;
