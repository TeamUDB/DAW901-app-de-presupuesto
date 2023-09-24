import { queryClientApp as queryClient } from "../App.tsx";

const UseQueryInvalidate = async () => {
  await queryClient.invalidateQueries({
    queryKey: [ 'ingresos' ]
  });
  await queryClient.invalidateQueries({
    queryKey: [ 'egresos' ]
  });
  await queryClient.invalidateQueries({
    queryKey: [ 'total-ingresos' ]
  });
  await queryClient.invalidateQueries({
    queryKey: [ 'total-egresos' ]
  });
  await queryClient.invalidateQueries({
    queryKey: [ 'balance' ]
  });
  await queryClient.invalidateQueries({
    queryKey: [ 'total-egresos-porcentaje' ]
  });
}

export default UseQueryInvalidate;