import { useTotalIngresos } from "../hooks";
import Money from "../filters/Money.ts";

const TotalIngresos = () => {
  const { totalIngresos }: { totalIngresos: number | undefined } = useTotalIngresos();
  return (<>
    <div className={ "bg-cyan-950 border-2 border-cyan-950 m-auto w-1/2 flex flex-row align-middle justify-around" }>
      <div className={ "uppercase p-3 text-amber-50" }>ingresos :</div>
      <div className={ "text-amber-50 font-bold p-3" }>{ Money(totalIngresos) }</div>
    </div>
  </>);
}

export default TotalIngresos;