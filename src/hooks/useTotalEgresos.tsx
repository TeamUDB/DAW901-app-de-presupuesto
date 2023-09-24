import { useQuery } from "@tanstack/react-query";
import { getEgresosTotal } from "../services/presupuesto-service.ts";


const useTotalEgresos = () => {
  const { data } = useQuery<number>({
    queryKey: [ 'total-egresos' ], queryFn: getEgresosTotal
  });
  return { totalEgresos: data };
}

export default useTotalEgresos;