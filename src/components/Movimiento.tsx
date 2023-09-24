import {
  eliminarTransaccion, Transaccion
} from "../services/presupuesto-service.ts";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import UseQueryInvalidate from "../hooks/useQueryInvalidate.tsx";

type props = {
  movimiento: Transaccion; porcentajePorItem: (item: Transaccion) => string;
}

function Movimiento(props: props) {

  const deleteItem = useMutation({
    mutationFn: (id: string) => eliminarTransaccion(id), onSuccess: UseQueryInvalidate
  })

  const handleDelete = () => {
    deleteItem.mutate(props.movimiento.id);
  }

  return (<>
    <div className={ "flex flex-row justify-around border-cyan-950 border-2 py-2" } key={ props.movimiento.id }>
      <div>{ props.movimiento.concepto }</div>
      <div className={ "flex flex-row" }>+ { Number(props.movimiento.monto).toFixed(2) }
        <span className={ "rounded-lg bg-cyan-950 text-amber-50 p-1 text-sm mx-2" }>
                  { props.porcentajePorItem(props.movimiento) } %
                </span>
        <div className={ "flex flex-row" } onClick={ handleDelete }>
          <MdDelete className={ "ml-2 text-2xl text-cyan-950" }/><span>Eliminar</span>
        </div>
      </div>
    </div>
  </>);
}

export default Movimiento;