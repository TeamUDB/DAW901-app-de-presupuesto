import { SetStateAction, useState } from "react";
import { Transaccion } from "../services/presupuesto-service.ts";
import useIngresos from "../hooks/useIngresos.tsx";
import useEgresos from "../hooks/useEgresos.tsx";
import useTotalIngresos from "../hooks/useTotalIngresos.tsx";

function Movimientos() {
  const [ activeTab, setActiveTab ] = useState(0);

  const { ingresos }: { ingresos: Transaccion[] | undefined } = useIngresos();
  const { egresos }: { egresos: Transaccion[] | undefined } = useEgresos();
  const { totalIngresos }: { totalIngresos: number | undefined } = useTotalIngresos();

  const changeTab = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  const porcentajePorItem = (item: Transaccion) => {
    return Number((item.monto * 100) / totalIngresos!).toFixed(2);
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
            return (<div className={ "flex flex-row justify-around border-cyan-950 border-2 py-2" } key={ingreso.id}>
              <div>{ ingreso.concepto }</div>
              <div>+ { Number(ingreso.monto).toFixed(2) }<span
                className={ "rounded-lg bg-cyan-950 text-amber-50 p-1 text-sm mx-2" }>{ porcentajePorItem(ingreso) } %</span>
              </div>
            </div>);
          }) }
        </div>
      </>) }
      { activeTab === 1 && (<>
        <div className={ "flex flex-col gap-2" }>
          { egresos?.map((egreso) => {
            return (<div className={ "flex flex-row justify-around border-cyan-950 border-2 py-2" } key={egreso.id}>
              <div>{ egreso.concepto }</div>
              <div>- { Number(egreso.monto).toFixed(2) } <span
                className={ "rounded-lg bg-cyan-950 text-amber-50 p-1 text-sm mx-2" }>{ porcentajePorItem(egreso) } %</span>
              </div>
            </div>);
          }) }
        </div>
      </>) }
    </div>
  </div>);
}


export default Movimientos;