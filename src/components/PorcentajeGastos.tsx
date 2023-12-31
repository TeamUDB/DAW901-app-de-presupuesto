import { useTotalGastoPorcentaje } from "../hooks";

const PorcentanjeGastos = () => {
  const { totalEgresosPorcentaje }: { totalEgresosPorcentaje: number | undefined } = useTotalGastoPorcentaje();
  return (<>
    <div className={ "m-auto w-1/2 flex flex-row align-middle justify-around" }>
      <div className={ "uppercase p-3 text-cyan-950" }>porcentaje de gastos :</div>
      <div
        className={ "bg-cyan-950 text-amber-50 font-bold px-4 py-1 h-8 my-2" }>{ totalEgresosPorcentaje?.toFixed(2) } %
      </div>
    </div>
  </>);
}

export default PorcentanjeGastos;