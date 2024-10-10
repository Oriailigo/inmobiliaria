import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Line } from 'react-chartjs-2'; // Asegúrate de tener instalada la librería react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraficoVisitas = () => {
  const [timeframe, setTimeframe] = useState('12 meses');

  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Visitas',
        data: [120, 150, 100, 170, 200, 220, 240, 300, 260, 280, 310, 350], // Datos de ejemplo
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    // Aquí puedes agregar la lógica para actualizar los datos del gráfico según el intervalo seleccionado.
  };

  const handleExportPDF = () => {
    // Aquí puedes implementar la lógica para exportar el gráfico a PDF.
    console.log("Exportando a PDF...");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Visitas</Typography>
          <Box>
            {['12 meses', '6 meses', '30 días', '7 días'].map((label) => (
              <Button
                key={label}
                variant="outlined"
                color={timeframe === label ? 'primary' : 'default'}
                onClick={() => handleTimeframeChange(label)}
                style={{ margin: '0 0.5rem' }}
              >
                {label}
              </Button>
            ))}

          </Box>
          <Button variant="contained" color="primary" onClick={handleExportPDF}>
              Exportar PDF
            </Button>
        </Box>

        <Box mt={2}>
          <Line data={data} options={{ responsive: true }} />
        </Box>

      </CardContent>
    </Card>
  );
};

export { GraficoVisitas };
