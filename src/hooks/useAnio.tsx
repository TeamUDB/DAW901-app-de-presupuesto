

export const useAnio = (fecha: Date)  => {
  const opciones = { year: 'numeric' as const };
  const anio = new Intl.DateTimeFormat('es-SV', opciones).format(fecha);
  return { anio };
}