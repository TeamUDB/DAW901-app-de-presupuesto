import { eliminarTransaccion, Transaccion } from "../services/presupuesto-service.ts";
import { MdDelete } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { useConfirmacionModal, useQueryInvalidate } from "../hooks";
import { ConfirmacionModal } from "./index.ts";
import Money from "../filters/Money.ts";


type props = {
  movimiento: Transaccion; porcentajePorItem: (item: Transaccion) => string;
}

function Movimiento(props: props) {

  const { modalVisible, showModal, hideModal } = useConfirmacionModal()

  const deleteItem = useMutation({
    mutationFn: (id: string) => eliminarTransaccion(id), onSuccess: useQueryInvalidate
  })

  const handleDelete = () => {
    showModal("¿Estás seguro de que deseas eliminar este elemento?");
  }

  return (<>
    <div className={ "flex flex-row justify-around border-cyan-950 border-2 py-2" } key={ props.movimiento.id }>
      <div>{ props.movimiento.concepto }</div>
      <div className={ "flex flex-row" }> { Money(Number(props.movimiento.monto)) }
        <span className={ "rounded-lg bg-cyan-950 text-amber-50 p-1 text-sm mx-2" }>
                  { props.porcentajePorItem(props.movimiento) } %
                </span>
        <div className={ "flex flex-row" } onClick={ handleDelete }>
          <MdDelete className={ "ml-2 text-2xl text-cyan-950" }/><span>Eliminar</span>
        </div>
      </div>
    </div>
    { modalVisible && (<ConfirmacionModal
        isOpen={ modalVisible }
        message="¿Estás seguro de que deseas realizar esta acción?"
        onConfirm={ () => {
          console.log("Acción confirmada en el modal");
          deleteItem.mutate(props.movimiento.id);
          hideModal();
        } }
        onCancel={ () => {
          hideModal();
        } }
      />) }
  </>);
}

export default Movimiento;