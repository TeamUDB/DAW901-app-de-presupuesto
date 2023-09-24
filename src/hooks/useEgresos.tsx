import { useQuery } from "@tanstack/react-query";
import { getEgresos, Transaccion } from "../services/presupuesto-service.ts";

const useEgresos = () => {
  const { data } = useQuery<Transaccion[]>({
    queryKey: [ 'egresos' ], queryFn: getEgresos
  });
  return { egresos: data };
}

export default useEgresos;