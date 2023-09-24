import { useQuery } from "@tanstack/react-query";
import { getIngresosTotal } from "../services/presupuesto-service.ts";

const useTotalIngresos = () => {
  const { data } = useQuery<number>({
    queryKey: [ 'total-ingresos' ], queryFn: getIngresosTotal
  });
  return { totalIngresos: data };
}

export default useTotalIngresos;