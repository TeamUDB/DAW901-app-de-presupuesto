import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Saldo, TotalIngresos, TotalGastos, PorcentajeGastos, RegistroTransaccion, Movimientos } from "./components"
import { useNombreMes } from "./hooks/useNombreMes.tsx";
import { useAnio } from "./hooks/useAnio.tsx";


// eslint-disable-next-line react-refresh/only-export-components
export const queryClientApp = new QueryClient()

function App() {

  const fecha = new Date();
  const { nombreMes } = useNombreMes(fecha);
  const { anio } = useAnio(fecha);

  return (<>
    <QueryClientProvider client={ queryClientApp }>
      <div className={ "grid grid-cols-1 grid-rows-2 gap-14" }>
        <div className={ "flex flex-col gap-4" }>
          <h1 className={ "text-4xl text-cyan-950 uppercase" }>{ `Presupuesto de ${ nombreMes } ${ anio }` }</h1>
          <div>
            <Saldo/>
          </div>
          <div>
            <TotalIngresos/>
          </div>
          <div>
            <TotalGastos/>
          </div>
          <div>
            <PorcentajeGastos/>
          </div>
        </div>
        <div className={ "flex flex-row justify-between" }>
          <div className={ "w-1/2" }>
            <RegistroTransaccion/>
          </div>
          <div className={ "w-1/2" }>
            <Movimientos/>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  </>)
}

export default App
