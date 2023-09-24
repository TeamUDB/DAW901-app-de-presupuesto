import { useTotalEgresos } from "../hooks";
import Money from "../filters/Money.ts";

const TotalGastos = () => {
  const { totalEgresos }: { totalEgresos: number | undefined } = useTotalEgresos();
  return (<>
    <div className={ "bg-amber-100 border-2 border-cyan-950 m-auto w-1/2 flex flex-row align-middle justify-around" }>
      <div className={ "uppercase p-3 " }>egresos :</div>
      <div className={ "text-amber-950 font-bold p-3" }>{ Money(totalEgresos) }</div>
    </div>
  </>);
}

export default TotalGastos;