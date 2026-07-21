import { Outlet } from 'react-router-dom'
import { Box, Container, Toolbar } from '@mui/material'
import { Header } from './Header'

export function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Toolbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
