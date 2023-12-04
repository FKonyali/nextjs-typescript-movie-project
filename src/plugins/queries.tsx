import { useQuery, UseQueryResult } from 'react-query'
import { getData } from './requests'

interface MovieData {
  result: any;
}

const useMovieQuery = (): UseQueryResult<MovieData> =>
  useQuery('movies', () => getData({ url: '', params: { s: 'movie' } }), {
    staleTime: Infinity,
  });

const useMovieDetailQuery = (id: string): UseQueryResult<MovieData> =>
  useQuery(`movie/${id}`, () => getData({ url: '', params: { i: id } }), {
    staleTime: Infinity,
  });

export { useMovieQuery, useMovieDetailQuery };
