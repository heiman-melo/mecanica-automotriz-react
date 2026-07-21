import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { HomePage } from '../pages/HomePage'
import { MotoresPage } from '../pages/MotoresPage'
import { SensoresPage } from '../pages/SensoresPage'
import { SensorDetailPage } from '../pages/SensorDetailPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="motores" element={<MotoresPage />} />
          <Route path="sensores" element={<SensoresPage />} />
          <Route path="sensores/:id" element={<SensorDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
