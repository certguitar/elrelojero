// api/hora.js
export default function handler(req, res) {
  const ahora = new Date();
  const horaServidor = ahora.toISOString(); // UTC

  res.status(200).json({
    hora_local_servidor: ahora.toLocaleTimeString('es-ES', {
      timeZone: 'America/Bogota', // Cambia según tu zona
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    zona_horaria: 'America/Bogota',
    timestamp: ahora.getTime()
  });
}