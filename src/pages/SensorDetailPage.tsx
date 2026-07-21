import { Link as RouterLink, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { getSensorById } from '../data/sensors'

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
  )
}

export function SensorDetailPage() {
  const { id } = useParams<{ id: string }>()
  const sensor = id ? getSensorById(id) : undefined

  if (!sensor) {
    return (
      <Stack spacing={2}>
        <Typography variant="h5">Sensor no encontrado</Typography>
        <Typography color="text.secondary">
          El sensor solicitado no existe en la lista de datos.
        </Typography>
        <Button
          component={RouterLink}
          to="/sensores"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          sx={{ alignSelf: 'flex-start' }}
        >
          Volver a sensores
        </Button>
      </Stack>
    )
  }

  return (
    <Stack spacing={3}>
      <Button
        component={RouterLink}
        to="/sensores"
        startIcon={<ArrowBackIcon />}
        sx={{ alignSelf: 'flex-start' }}
      >
        Volver a sensores
      </Button>

      <Box>
        <Typography variant="overline" color="secondary">
          {sensor.abbreviation}
        </Typography>
        <Typography variant="h4" component="h1">
          {sensor.name}
        </Typography>
      </Box>

      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2.5} divider={<Divider flexItem />}>
            <DetailRow label="Descripción" value={sensor.description} />
            <DetailRow label="Ubicación" value={sensor.location} />
            <DetailRow label="Tipo de señal" value={sensor.signalType} />
            <DetailRow label="Rango típico" value={sensor.typicalRange} />
            <DetailRow label="Síntomas de falla" value={sensor.symptoms} />
            <DetailRow label="Notas" value={sensor.notes} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
