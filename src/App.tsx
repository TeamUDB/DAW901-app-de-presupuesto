import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Saldo, TotalIngresos, TotalGastos, PorcentajeGastos, RegistroTransaccion, Movimientos } from "./components"

const queryClient = new QueryClient()

function App() {
  return (<>
    <QueryClientProvider client={ queryClient }>
      <div className={ "grid grid-cols-1 grid-rows-2 gap-14" }>
        <div className={ "flex flex-col gap-4" }>
          <h1 className={ "text-4xl text-cyan-950" }>Presupuesto de Septiembre 2023</h1>
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
          <div className={"w-1/2"}>
            <RegistroTransaccion/>
          </div>
          <div className={"w-1/2"}>
            <Movimientos/>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  </>)
}

export default App
