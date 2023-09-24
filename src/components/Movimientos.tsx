import { SetStateAction, useState } from "react";

function Movimientos() {
  const [ activeTab, setActiveTab ] = useState(0);

  const changeTab = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

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
        <div className={"flex flex-col gap-2"}>
          <div className={"flex flex-row justify-around border-cyan-950 border-2 py-1"}>
            <div>Salario 1</div>
            <div>+ 400.00</div>
          </div>
          <div className={"flex flex-row justify-around border-cyan-950 border-2 py-1"}>
            <div>Salario 2</div>
            <div>+ 400.00</div>
          </div>
        </div>
      </>) }
      { activeTab === 1 && (<>
        <div className={"flex flex-col gap-2"}>
          <div className={"flex flex-row justify-around border-cyan-950 border-2 py-1"}>
            <div>Alquiler</div>
            <div>- 125.00</div>
          </div>
          <div className={"flex flex-row justify-around border-cyan-950 border-2 py-1"}>
            <div>comida</div>
            <div>- 200.00</div>
          </div>
        </div>
      </>) }
    </div>
  </div>);
}


export default Movimientos;