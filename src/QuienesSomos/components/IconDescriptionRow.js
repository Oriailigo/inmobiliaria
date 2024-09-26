import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

function IconDescriptionRow({ icons }) {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
      {icons.map((iconObj, index) => (
        <Grid item xs={12} md={6} key={index} textAlign="center">
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <i className="material-icons">{iconObj.icon}</i>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              {iconObj.title}
            </Typography>
          </Box>
          <Typography variant="body2" paragraph>
            {iconObj.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export  {IconDescriptionRow};
