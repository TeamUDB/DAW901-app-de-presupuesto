const RegistroTransaccion = () => {
  return (<>
    <div className={"flex flex-col gap-8"}>
      <h1 className={ "text-2xl text-center" }><span
        className={ "bg-amber-100 py-2 px-4 rounded-full font-bold mr-4" }>+</span>Transacción</h1>
      <div className={"m-auto w-2/3"}>
        <form action="#">
          <select className={ "border border-gray-300 p-2 rounded-lg w-full my-2" }>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
          <input type="text" className={ "border border-gray-300 p-2 rounded-lg w-full my-2" } placeholder={ "Descripción" }/>
          <input type="text" className={ "border border-gray-300 p-2 rounded-lg w-full my-2" } placeholder={ "Monto" }/>
          <button className={ "bg-cyan-950 text-amber-100 py-2 px-4 rounded-lg w-full my-2" }>Agregar</button>
        </form>
      </div>
    </div>

  </>)
};

export default RegistroTransaccion;