import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouter } from './app/router'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
