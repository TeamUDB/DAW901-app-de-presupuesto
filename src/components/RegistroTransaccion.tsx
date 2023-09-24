import { MontoInput } from "./index.ts";
import { useMutation } from "@tanstack/react-query";
import { queryClientApp as queryClient } from "../App.tsx";
import { agregarTransaccion, TipoTransaccion, Transaccion } from "../services/presupuesto-service.ts";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RegistroTransaccion = () => {

  const [ monto, setMonto ] = useState<string>("0");
  const [ descripcion, setDescripcion ] = useState<string>("");
  const [ tipo, setTipo ] = useState<TipoTransaccion>(TipoTransaccion.Ingreso);

  const agregar = useMutation({
    mutationFn: agregarTransaccion, onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [ 'ingresos' ]
      });
      await queryClient.invalidateQueries({
        queryKey: [ 'egresos' ]
      });
      await queryClient.invalidateQueries({
        queryKey: [ 'total-ingresos' ]
      });
      await queryClient.invalidateQueries({
        queryKey: [ 'total-egresos' ]
      });
      await queryClient.invalidateQueries({
        queryKey: [ 'balance' ]
      });
      await queryClient.invalidateQueries({
        queryKey: [ 'total-egresos-porcentaje' ]
      });
      setTipo(TipoTransaccion.Ingreso);
      setDescripcion("");
      setMonto("0");
    }
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(monto) > 0) {
      const transaccion: Transaccion = {
        concepto: descripcion || 'Movimiento sin concepto',
        monto: Number(monto),
        tipo: TipoTransaccion.Ingreso === tipo ? TipoTransaccion.Ingreso : TipoTransaccion.Egreso,
        id: uuidv4(),
        fecha: new Date()
      }
      agregar.mutate(transaccion);
    } else {
      alert("El monto debe ser mayor a 0");
    }
  };

  const handleDescripcion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescripcion(e.target.value);
  }

  const handleMonto = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    const dollars = sanitizedValue.slice(0, -2);
    const cents = sanitizedValue.slice(-2);
    const formattedValue = `${ dollars }.${ cents }`;
    setMonto(formattedValue);
  };

  const handleSelectTipo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipo(event.target.value as TipoTransaccion);
  };


  return (<>
    <div className={ "flex flex-col gap-8" }>
      <h1 className={ "text-2xl text-center" }><span
        className={ "bg-amber-100 py-2 px-4 rounded-full font-bold mr-4" }>+</span>Transacción</h1>
      <div className={ "m-auto w-2/3" }>
        <form action="#" onSubmit={ onSubmit }>
          <select onChange={ handleSelectTipo } value={ tipo }
                  className={ "border border-gray-300 p-2 rounded-lg w-full my-2" }>
            <option value={ TipoTransaccion.Ingreso }>Ingreso</option>
            <option value={ TipoTransaccion.Egreso }>Gasto</option>
          </select>
          <input type="text" value={ descripcion } onChange={ handleDescripcion }
                 className={ "border border-gray-300 p-2 rounded-lg w-full my-2" } placeholder={ "Descripción" }/>
          <MontoInput handleInputChange={ handleMonto } inputValue={ monto }/>
          <input type={ "submit" } value={ "Agregar" }
                 className={ "bg-cyan-950 text-amber-100 py-2 px-4 rounded-lg w-full my-2" }/>
        </form>
      </div>
    </div>

  </>)
};

export default RegistroTransaccion;