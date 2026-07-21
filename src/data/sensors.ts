import type { Sensor } from '../types/sensor'

export const sensors: Sensor[] = [
  {
    id: 'map',
    name: 'Sensor de presión absoluta del múltiple',
    abbreviation: 'MAP',
    description:
      'Mide la presión absoluta dentro del múltiple de admisión. La ECU usa esta señal para calcular la carga del motor y dosificar el combustible.',
    location: 'Múltiple de admisión',
    signalType: 'Analógica (voltaje) o frecuencia',
    typicalRange: '0.5 – 4.5 V (según vacío/presión)',
    symptoms:
      'Consumo alto, humo negro, fallos en aceleración, códigos P0105–P0109.',
    notes:
      'Al ralentí con vacío alto el voltaje suele ser bajo; al acelerar a fondo se acerca a la presión atmosférica.',
  },
  {
    id: 'etc',
    name: 'Control electrónico del acelerador',
    abbreviation: 'ETC',
    description:
      'Sistema drive-by-wire que controla la mariposa mediante un motor eléctrico según la posición del pedal y las estrategias de la ECU.',
    location: 'Cuerpo de aceleración (throttle body)',
    signalType: 'PWM / señales de posición (TPS dual)',
    typicalRange: 'Posición 0–100 % (según pedido de ECU)',
    symptoms:
      'Modo limp, respuesta lenta del acelerador, RPM inestables, códigos P2100–P2138.',
    notes:
      'ETC trabaja junto con el sensor del pedal (APP) y sensores TPS redundantes para seguridad.',
  },
  {
    id: 'ks',
    name: 'Sensor de detonación (Knock Sensor)',
    abbreviation: 'KS',
    description:
      'Detecta vibraciones de alta frecuencia causadas por detonación o picado. Permite a la ECU retardar el avance de encendido.',
    location: 'Bloque del motor',
    signalType: 'Piezoeléctrica (AC / mV)',
    typicalRange: 'Señal de ruido variable según RPM y carga',
    symptoms:
      'Pérdida de potencia, detonación audible, códigos P0325–P0334.',
    notes:
      'Un sensor flojo o con cable dañado puede generar retardos innecesarios del encendido.',
  },
  {
    id: 'tps',
    name: 'Sensor de posición de la mariposa',
    abbreviation: 'TPS',
    description:
      'Indica el ángulo de apertura de la mariposa de aceleración. Ayuda a la ECU a interpretar demanda del conductor y transiciones.',
    location: 'Cuerpo de aceleración',
    signalType: 'Analógica (potenciómetro) o digital',
    typicalRange: '≈ 0.5 V cerrado – ≈ 4.5 V abierto',
    symptoms:
      'Tirones, ralentí irregular, cortes al acelerar, códigos P0120–P0123.',
    notes:
      'En sistemas ETC suele haber dos circuitos TPS para validación cruzada.',
  },
  {
    id: 'iat',
    name: 'Sensor de temperatura del aire de admisión',
    abbreviation: 'IAT',
    description:
      'Mide la temperatura del aire que entra al motor. La densidad del aire cambia con la temperatura y afecta el cálculo de combustible.',
    location: 'Conducto de admisión o integrado en MAF',
    signalType: 'Termistor NTC (analógica)',
    typicalRange: '≈ 0.5 – 4.5 V (inverso a la temperatura)',
    symptoms:
      'Mezcla rica/pobre, arranque difícil en frío, códigos P0110–P0114.',
    notes:
      'Aire frío = más denso = más combustible requerido; aire caliente = lo contrario.',
  },
  {
    id: 'maf',
    name: 'Sensor de flujo másico de aire',
    abbreviation: 'MAF',
    description:
      'Mide la masa de aire que entra al motor. Es una de las entradas principales para el cálculo de inyección en muchos vehículos.',
    location: 'Entre el filtro de aire y el cuerpo de aceleración',
    signalType: 'Analógica (voltaje) o frecuencia',
    typicalRange: '≈ 0.5 – 4.5 V o Hz según RPM/carga',
    symptoms:
      'Falta de potencia, consumo excesivo, humo, códigos P0100–P0104.',
    notes:
      'Suciedad en el elemento caliente o fisuras en mangueras de admisión falsean la lectura.',
  },
  {
    id: 'iac',
    name: 'Válvula / motor de control de aire de ralentí',
    abbreviation: 'IAC',
    description:
      'Regula el paso de aire en ralentí cuando la mariposa está cerrada, estabilizando las RPM en frío, con A/C o carga eléctrica.',
    location: 'Cuerpo de aceleración o bypass de aire',
    signalType: 'PWM / pasos (stepper) según diseño',
    typicalRange: 'Pasos o % de apertura según estrategia ECU',
    symptoms:
      'Ralentí alto/bajo, motor se apaga al soltar acelerador, códigos P0505–P0507.',
    notes:
      'En muchos vehículos modernos el control de ralentí lo hace ETC y no existe IAC separado.',
  },
]

export function getSensorById(id: string): Sensor | undefined {
  return sensors.find((sensor) => sensor.id === id)
}
