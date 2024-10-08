import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Breadcrumb() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Alquiler
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/" onClick={handleClick}>
      Casa
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/" onClick={handleClick}>
      Buenos Aires
    </Link>,
    <Link
      underline="hover"
      key="4"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Quilmes
    </Link>,
    <Typography key="5" sx={{ color: 'text.primary' }}>
      Alquiler casa 2 ambientes quilmes
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{ marginTop: '0rem', marginBottom: '0rem' }}>
  
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

export {Breadcrumb};