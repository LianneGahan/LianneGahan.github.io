import * as React from "react";
import { Box, Button, Card, CardContent, TextField, Typography, Stack } from "@mui/material";
import { useState } from "react";

const LigninBondCard = () => {
  const [bonds, setBonds] = useState({
    'β-O-4': '',
    'β-β': '',
    'β-5': '',
    '5-5': '',
    'α-O-4': '',
    '4-O-5': '',
    'β-1': '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBonds({
      ...bonds,
      [e.target.name]: e.target.value
    });
  };

  const handleSimulation = () => {
    const totalPercentage = Object.values(bonds).reduce((acc, value) => acc + parseFloat(value || 0), 0);
    if (totalPercentage !== 100) {
      setError('The total percentage must equal 100.');
    } else {
      setError('');
      // Run your simulation here
      console.log('Running simulation with:', bonds);
    }
  };

  const handleReset = () => {
    setBonds({
      'β-O-4': '',
      'β-β': '',
      'β-5': '',
      '5-5': '',
      'α-O-4': '',
      '4-O-5': '',
      'β-1': '',
    });
    setError('');
  };

  return (
    <Card sx={{margin: 'auto', marginTop: '2em', padding: '1em', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Lignin Bond Simulation
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Enter the percentages for the 7 different lignin bonds. The total should be 100%.
        </Typography>
        <Stack spacing={2}>
          {Object.keys(bonds).map((bond) => (
            <TextField
              key={bond}
              label={bond}
              name={bond}
              type="number"
              value={bonds[bond]}
              onChange={handleChange}
              fullWidth
              inputProps={{ min: 0, max: 100 }}
              variant="outlined"
              sx={{ marginBottom: '1em' }}
            />
          ))}
        </Stack>
        {error && (
          <Typography color="error" variant="body2" sx={{ marginBottom: '1em' }}>
            {error}
          </Typography>
        )}
        <Stack spacing={2} sx={{ marginTop: '1em' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSimulation}
            fullWidth
          >
            Run Simulation
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            fullWidth
          >
            Reset
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LigninBondCard;
