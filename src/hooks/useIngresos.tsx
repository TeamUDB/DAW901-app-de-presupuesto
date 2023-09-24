import { useQuery } from "@tanstack/react-query";
import { getIngresos, Transaccion } from "../services/presupuesto-service.ts";

const useIngresos = () => {
  const { data } = useQuery<Transaccion[]>({
    queryKey: [ 'ingresos' ], queryFn: getIngresos
  });
  return { ingresos: data };
}

export default useIngresos;