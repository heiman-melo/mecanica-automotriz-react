import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import SensorsIcon from '@mui/icons-material/Sensors'

export function HomePage() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Teoría de mecánica automotriz
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 640 }}>
          Consulta conceptos básicos de motores y sensores electrónicos del
          motor. Todo el contenido es local, pensado como material de estudio.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
          },
        }}
      >
        <Card variant="outlined" sx={{ height: '100%' }}>
          <CardContent>
            <PrecisionManufacturingIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Motores
            </Typography>
            <Typography color="text.secondary">
              Fundamentos de combustión, inyección y encendido para entender cómo
              trabaja el motor.
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={RouterLink} to="/motores" variant="contained">
              Ver motores
            </Button>
          </CardActions>
        </Card>

        <Card variant="outlined" sx={{ height: '100%' }}>
          <CardContent>
            <SensorsIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Sensores
            </Typography>
            <Typography color="text.secondary">
              Tabla de sensores del motor (MAP, MAF, TPS, IAT y más) con ficha
              técnica de cada uno.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={RouterLink}
              to="/sensores"
              variant="contained"
              color="secondary"
            >
              Ver sensores
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  )
}
