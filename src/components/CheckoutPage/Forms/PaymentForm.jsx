import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { UploadImage } from '../../FormFields';

export default function PaymentForm(props) {
  const {
    formField: { image }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Image to IPFS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <UploadImage
            image={image}
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
