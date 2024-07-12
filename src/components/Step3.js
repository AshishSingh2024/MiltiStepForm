// src/components/Step3.js
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Step3 = ({ formData, prevStep, handleSubmit }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h5">Confirmation</Typography>
      <Typography variant="body1">
        Name: {formData.name}
      </Typography>
      <Typography variant="body1">
        Email: {formData.email}
      </Typography>
      <Typography variant="body1">
        Phone: {formData.phone}
      </Typography>
      <Typography variant="body1">
        Address Line 1: {formData.address1}
      </Typography>
      <Typography variant="body1">
        Address Line 2: {formData.address2}
      </Typography>
      <Typography variant="body1">
        City: {formData.city}
      </Typography>
      <Typography variant="body1">
        State: {formData.state}
      </Typography>
      <Typography variant="body1">
        Zip Code: {formData.zip}
      </Typography>
      <Grid container justifyContent="space-between">
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Step3;
