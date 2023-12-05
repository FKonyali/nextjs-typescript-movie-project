import { useQuery, UseQueryResult } from 'react-query'
import { getData } from './requests'

interface MovieData {
  result: any;
}

interface UseMovieQueryProps {
  callbacks?: {
    onSuccess?: (response: MovieData) => void;
    onError?: () => void;
  };
}

const useMovieQuery = ({
  callbacks = {},
}: UseMovieQueryProps = {}): UseQueryResult<MovieData> =>
  useQuery('movies', () => getData({ url: '', params: { s: 'movie' } }), {
    staleTime: Infinity,
    onSuccess: (response) => {
      callbacks?.onSuccess?.(response);
    },
    onError: (e) => {
      console.log(e);
      callbacks?.onError?.();
    },
  });

const useMovieDetailQuery = (id: string): UseQueryResult<MovieData> =>
  useQuery(`movie/${id}`, () => getData({ url: '', params: { i: id } }), {
    staleTime: Infinity,
  });

export { useMovieQuery, useMovieDetailQuery };
