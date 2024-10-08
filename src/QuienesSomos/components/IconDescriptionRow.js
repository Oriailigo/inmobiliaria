import React from 'react';
import { Grid, Typography, Box } from '@mui/material';


function IconDescriptionRow({ icons }) {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 3 }}>
      {icons.map((iconObj, index) => (
        <Grid item xs={12} md={6} key={index} textAlign="center">
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <img src={iconObj.icon} alt="Star Icon" width="50px"  />
            <Typography variant="h6" sx={{ marginLeft: 1, fontWeight: 'bold' }}>
              {iconObj.title}
            </Typography>
          </Box>
          <Typography variant="body2" align="left" paragraph>
            {iconObj.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export  {IconDescriptionRow};
