

export const useNombreMes = (fecha: Date) => {
  const opciones = { month: 'long' as const };
  const nombreMes = new Intl.DateTimeFormat('es-SV', opciones).format(fecha);
  return { nombreMes };
}