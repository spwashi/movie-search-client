import {useQuery} from '../../../hooks/useQuery';

export function useMovieInputQueryParam() {
  const {q: input} = useQuery();
  return input;
}