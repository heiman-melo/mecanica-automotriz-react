import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a3a5c',
      light: '#2d5a87',
      dark: '#0f2438',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c45c26',
      light: '#e07a45',
      dark: '#8f3f14',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f0f3f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2332',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
})
