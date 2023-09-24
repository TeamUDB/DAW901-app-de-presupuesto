import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../services/presupuesto-service.ts";

const useBalance = () => {
  const { data } = useQuery<number>({
    queryKey: [ 'balance' ], queryFn: getBalance
  });
  return { data };
}

export default useBalance;