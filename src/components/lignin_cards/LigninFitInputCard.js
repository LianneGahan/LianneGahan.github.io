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

  const [sgRatio, setSgRatio] = useState('');
  const [dp, setDp] = useState('');
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // State to store the image URL

  const handleChange = (e) => {
    setBonds({
      ...bonds,
      [e.target.name]: e.target.value
    });
  };

  const handleSimulation = async () => {
    const totalPercentage = Object.values(bonds).reduce((acc, value) => acc + parseFloat(value || 0), 0);
    
    if (totalPercentage !== 100) {
      setError('The total percentage must equal 100.');
      return;
    }

    if (sgRatio < 0 || sgRatio > 100) {
      setError('SG Ratio must be between 0 and 100.');
      return;
    }

    if (!/^\d+(-\d+)?$/.test(dp)) {
      setError('DP must be a single number or a range (e.g., 5-10).');
      return;
    }

    setError('');

    // Prepare the payload for the backend
    const payload = {
      bonds,
      sgRatio,
      dp
    };

    try {
      // Send the data to the backend
      const response = await fetch('http://localhost:5000/api/run-simulation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });


      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.imageUrl); // Assume the backend returns the URL of the generated image
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred during simulation.');
      }
    } catch (error) {
      setError('Failed to run the simulation. Please try again later.');
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
    setSgRatio('');
    setDp('');
    setError('');
    setImageUrl(''); // Reset the image URL as well
  };

  return (
    <Card sx={{margin: 'auto', marginTop: '2em', padding: '1em', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Lignin Bond Simulation
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Bond Types
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
          {error && (
          <Typography color="error" variant="body2" sx={{ marginBottom: '1em' }}>
            {error}
          </Typography>
        )}
        <Typography variant="h6" component="div" gutterBottom>
          Other Properties
        </Typography>
          <TextField
            label="S/G Ratio"
            name="sgRatio"
            type="number"
            value={sgRatio}
            onChange={(e) => setSgRatio(e.target.value)}
            fullWidth
            inputProps={{ min: 0, max: 100 }}
            variant="outlined"
            sx={{ marginBottom: '1em' }}
          />
          <TextField
            label="DP (Degree of Polymerization)"
            name="dp"
            type="text"
            value={dp}
            onChange={(e) => setDp(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="e.g., 10 or 5-15"
            sx={{ marginBottom: '1em' }}
          />
        </Stack>

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
        {imageUrl && (
          <Box sx={{ marginTop: '2em', textAlign: 'center' }}>
            <img src={imageUrl} alt="Simulation Result" style={{ maxWidth: '100%' }} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default LigninBondCard;
