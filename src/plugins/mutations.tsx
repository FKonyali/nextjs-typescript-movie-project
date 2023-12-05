import { useMutation, UseMutationResult, UseQueryOptions } from 'react-query';
import { postData, deleteData, patchData, getData, putData } from './requests';

interface MoreMoviesMutationProps {
  queryClient: any;
  callbacks?: {
    onSuccess?: (response: any) => void;
    onError?: () => void;
  };
}

const useMoreMoviesMutation = ({
  queryClient,
  callbacks = {},
}: MoreMoviesMutationProps): UseMutationResult<any, unknown, any, unknown> =>
  useMutation(
    (formPayload) =>
      getData({
        url: ``,
        params: formPayload,
      }),
    {
      onSuccess: (response) => {
        callbacks?.onSuccess?.(response);
      },
      onError: (e) => {
        console.log(e);
        callbacks?.onError?.();
      },
    }
  );

export { useMoreMoviesMutation };
