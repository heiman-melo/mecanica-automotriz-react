import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { sensors } from '../data/sensors'

export function SensoresPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Sensores del motor
        </Typography>
        <Typography color="text.secondary">
          Lista de sensores electrónicos comunes. Selecciona uno para ver sus
          especificaciones.
        </Typography>
      </Box>

      <TableContainer component={Paper} variant="outlined">
        <Table size={isMobile ? 'small' : 'medium'} aria-label="tabla de sensores">
          <TableHead>
            <TableRow>
              <TableCell>Abrev.</TableCell>
              <TableCell>Nombre</TableCell>
              {!isMobile && <TableCell>Ubicación</TableCell>}
              {!isMobile && <TableCell>Tipo de señal</TableCell>}
              <TableCell align="right">Detalle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sensors.map((sensor) => (
              <TableRow key={sensor.id} hover>
                <TableCell>
                  <Typography color="primary" sx={{ fontWeight: 700 }}>
                    {sensor.abbreviation}
                  </Typography>
                </TableCell>
                <TableCell>{sensor.name}</TableCell>
                {!isMobile && <TableCell>{sensor.location}</TableCell>}
                {!isMobile && <TableCell>{sensor.signalType}</TableCell>}
                <TableCell align="right">
                  <Button
                    component={RouterLink}
                    to={`/sensores/${sensor.id}`}
                    variant="contained"
                    size="small"
                    startIcon={<VisibilityIcon />}
                  >
                    Ver
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}
