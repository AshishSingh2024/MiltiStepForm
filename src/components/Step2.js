// src/components/Step2.js
import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return address1 && city && state && zip;
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h5">Address Information</Typography>
      <TextField
        label="Address Line 1"
        name="address1"
        value={address1}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={address2}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={zip}
        onChange={handleChange}
        fullWidth
        required
      />
      <Grid container justifyContent="space-between">
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={nextStep}
          disabled={!validate()}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step2;
