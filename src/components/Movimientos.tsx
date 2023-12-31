import { SetStateAction, useState } from "react";
import { Transaccion } from "../services/presupuesto-service.ts";
import { useIngresos, useEgresos, useTotalIngresos } from "../hooks";
import Movimiento from "./Movimiento.tsx";

function Movimientos() {
  const [ activeTab, setActiveTab ] = useState(0);

  const { ingresos }: { ingresos: Transaccion[] | undefined } = useIngresos();
  const { egresos }: { egresos: Transaccion[] | undefined } = useEgresos();
  const { totalIngresos }: { totalIngresos: number | undefined } = useTotalIngresos();

  const changeTab = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  const porcentajePorItem = (item: Transaccion) => {
    if (!totalIngresos) return "0";
    return Math.abs(Number((item.monto * 100) / totalIngresos!)).toFixed(2);
  }
  return (<div className="w-full mx-auto p-4">
    <div className="flex space-x-0 uppercase">
      <div
        onClick={ () => changeTab(0) }
        className={ `p-2 rounded-lg ${ activeTab === 0 ? 'bg-cyan-950 text-amber-100' : 'bg-amber-100 text-cyan-950' } w-1/2 hover:bg-opacity-75 focus:outline-none` }
      >
        ingresos
      </div>
      <div
        onClick={ () => changeTab(1) }
        className={ `p-2 rounded-lg ${ activeTab === 1 ? 'bg-cyan-950 text-amber-100' : 'bg-amber-100 text-cyan-950' } w-1/2 hover:bg-opacity-75 focus:outline-none` }
      >
        egresos
      </div>
    </div>

    {/* Contenido de las pestañas */ }
    <div className="py-4">
      { activeTab === 0 && (<>
        <div className={ "flex flex-col gap-2" }>
          { ingresos?.map((ingreso) => {
            return (<Movimiento movimiento={ ingreso } porcentajePorItem={ porcentajePorItem } key={ ingreso.id }/>);
          }) }
          {
            ingresos?.length === 0 && (<div className={ "text-center text-amber-950" }>No hay ingresos registrados</div>)
          }
        </div>
      </>) }
      { activeTab === 1 && (<>
        <div className={ "flex flex-col gap-2" }>
          { egresos?.map((egreso) => {
            return (<Movimiento movimiento={ egreso } porcentajePorItem={ porcentajePorItem } key={ egreso.id }/>);
          }) }
          {
            egresos?.length === 0 && (<div className={ "text-center text-amber-950" }>No hay egresos registrados</div>)
          }
        </div>
      </>) }
    </div>
  </div>);
}


export default Movimientos;