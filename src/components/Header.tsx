import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import SensorsIcon from '@mui/icons-material/Sensors'

const menuItems = [
  {
    label: 'Motores',
    path: '/motores',
    icon: <PrecisionManufacturingIcon />,
  },
  {
    label: 'Sensores',
    path: '/sensores',
    icon: <SensorsIcon />,
  },
]

export function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`)

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ gap: 1 }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="abrir menú"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 3 },
            }}
          >
            <DirectionsCarIcon sx={{ fontSize: 32 }} />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                whiteSpace: 'nowrap',
              }}
            >
              Mecánica Automotriz
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  startIcon={item.icon}
                  color="inherit"
                  variant={isActive(item.path) ? 'outlined' : 'text'}
                  sx={{
                    borderColor: isActive(item.path)
                      ? 'rgba(255,255,255,0.7)'
                      : 'transparent',
                    bgcolor: isActive(item.path)
                      ? 'rgba(255,255,255,0.12)'
                      : 'transparent',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280 }} role="presentation">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DirectionsCarIcon color="primary" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Menú
              </Typography>
            </Box>
            <IconButton
              aria-label="cerrar menú"
              onClick={() => setDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={RouterLink}
                to={item.path}
                selected={isActive(item.path)}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
