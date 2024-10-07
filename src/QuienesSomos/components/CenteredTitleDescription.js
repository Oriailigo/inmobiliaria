import React from 'react';
import { Grid, Typography } from '@mui/material';

function CenteredTitleDescription({ title, description }) {
  return (
    <Grid container spacing={2} sx={{ marginTop: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom  sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ paddingLeft: '8rem', paddingRight: '8rem' }}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export  {CenteredTitleDescription};
