// src/components/Step1.js
import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return name && email && phone;
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Typography variant="h5">Personal Information</Typography>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={nextStep}
        disabled={!validate()}
      >
        Next
      </Button>
    </Grid>
  );
};

export default Step1;
