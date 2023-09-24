import { useQuery } from "@tanstack/react-query";
import { getEgresosTotalPorcentaje } from "../services/presupuesto-service.ts";

const useTotalGastoPorcentaje = () => {
  const { data } = useQuery<number>({
    queryKey: [ 'total-egresos-porcentaje' ], queryFn: getEgresosTotalPorcentaje,
  });
  return { totalEgresosPorcentaje: data };
}

export default useTotalGastoPorcentaje;