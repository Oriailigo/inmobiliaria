import React from 'react';
import { Box} from '@mui/material';
import { FavoritesCard } from './components/FavoritoCardSin'; // Si tienes este layout
import { FavoritoCardCon } from './components/FavoritoCardCon'; // Si tienes este layout

function FavoritoLayout() {
  return (
    <Box sx={{display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',}}>
            <FavoritesCard/>
            <FavoritoCardCon/>
    </Box>
  );
}

export { FavoritoLayout };
