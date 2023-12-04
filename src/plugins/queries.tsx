import { useQuery, UseQueryResult } from 'react-query'
import { getData } from './requests'

interface MovieData {
  result: any;
}

const useMovieQuery = (): UseQueryResult<MovieData> =>
  useQuery('movies', () => getData({ url: '', params: { s: 'movie' } }), {
    staleTime: Infinity,
  });

export { useMovieQuery };
