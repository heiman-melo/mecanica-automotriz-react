import type { EngineTopic } from '../types/engine'

export const engineTopics: EngineTopic[] = [
  {
    id: 'combustion',
    title: 'Motor de combustión interna',
    summary: 'Ciclo de cuatro tiempos y cómo se genera la potencia.',
    content:
      'El motor de gasolina típico opera en admisión, compresión, combustión (expansión) y escape. La ECU coordina inyección y encendido para maximizar eficiencia y reducir emisiones.',
  },
  {
    id: 'inyeccion',
    title: 'Sistema de inyección',
    summary: 'Cómo se dosifica el combustible según la carga del motor.',
    content:
      'La inyección electrónica usa sensores (MAF/MAP, O2, TPS, IAT, CKP) para calcular el tiempo de inyector. Una mezcla correcta depende de lecturas precisas y de la estrategia de la ECU.',
  },
  {
    id: 'encendido',
    title: 'Sistema de encendido',
    summary: 'Chispa en el momento correcto para una combustión eficiente.',
    content:
      'El avance de encendido se ajusta según RPM, carga y detonación (KS). Un avance excesivo puede provocar picado; un retardo excesivo reduce potencia y eleva temperatura de escape.',
  },
]
