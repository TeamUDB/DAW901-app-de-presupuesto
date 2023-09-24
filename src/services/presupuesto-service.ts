export enum TipoTransaccion {
  Ingreso = 'ingreso', Egreso = 'egreso',
}

export type Transaccion = {
  id: string, tipo: TipoTransaccion, fecha: Date, concepto: string, monto: number,
}

let transacciones: Transaccion[] = [
  /*
  {
  id: 'e39af8db-aa87-4f57-a94e-7d89fc8bf84d',
  tipo: TipoTransaccion.Ingreso,
  fecha: new Date(),
  concepto: 'Salario 1',
  monto: 400,
}, {
  id: '5ab4cace-a63e-42e2-aec6-2ca2051f0e43',
  tipo: TipoTransaccion.Ingreso,
  fecha: new Date(),
  concepto: 'Salario 2',
  monto: 400,
}, {
  id: 'c7e08b05-d0f1-4e22-b999-16a60f397e80',
  tipo: TipoTransaccion.Egreso,
  fecha: new Date(),
  concepto: 'Supermercado',
  monto: -200,
}, {
  id: '8b793047-33f8-4f79-a57d-538d2485493e',
  tipo: TipoTransaccion.Egreso,
  fecha: new Date(),
  concepto: 'Servicios básicos',
  monto: -100,
} */
];


export const getIngresos = async () => {
  return new Promise<Transaccion[]>((resolve) => {
    resolve(transacciones.filter(t => t.tipo === 'ingreso'));
  });
}

export const getEgresos = async () => {
  return new Promise<Transaccion[]>((resolve) => {
    resolve(transacciones.filter(t => t.tipo === 'egreso'));
  });
}

export const getIngresosTotal = async (): Promise<number> => {
  const transacciones = await getIngresos();
  const totalIngresos = transacciones.reduce((prev, curr) => prev + curr.monto, 0);
  return Number(totalIngresos.toFixed(2));
}

export const getEgresosTotal = async (): Promise<number> => {
  const transacciones = await getEgresos();
  const totalEgresos = transacciones.reduce((prev, curr) => prev + curr.monto, 0);
  return Number(Number(totalEgresos).toFixed(2));
}

export const getBalance = async () => {
  const ingresos = await getIngresosTotal();
  const egresos = await getEgresosTotal();
  const balance = ingresos + egresos;
  return Number(balance.toFixed(2));
}

export const getEgresosTotalPorcentaje = async () => {
  const ingresos = await getIngresosTotal();
  const egresos = await getEgresosTotal();
  if (ingresos === 0) return 0;
  const porcentaje = ((egresos * 100) / ingresos!);
  return Number(Math.abs(porcentaje).toFixed(2));
}

export const agregarTransaccion = async (transaccion: Transaccion) => {
  new Promise((resolve) => {
    transacciones = [ ...transacciones, transaccion ];
    resolve(transaccion);
  });
}

export const eliminarTransaccion = async (id: string) => {
  return new Promise((resolve) => {
    transacciones = transacciones.filter(t => t.id !== id);
    resolve('Ok');
  })
}