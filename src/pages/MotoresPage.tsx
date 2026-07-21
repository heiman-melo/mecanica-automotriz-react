import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import { engineTopics } from '../data/engines'

export function MotoresPage() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Motores
        </Typography>
        <Typography color="text.secondary">
          Temas introductorios de teoría automotriz relacionados con el motor.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr 1fr',
          },
        }}
      >
        {engineTopics.map((topic) => (
          <Card key={topic.id} variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {topic.title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="secondary"
                gutterBottom
              >
                {topic.summary}
              </Typography>
              <Typography color="text.secondary">{topic.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  )
}
