import { useBalance } from "../hooks";

const Saldo = () => {
  const { data } = useBalance();
  return (<div className={ "text-4xl text-cyan-950 font-bold" }>{ data || 0 > 0 ? '+' + data : data }</div>);
}

export default Saldo;