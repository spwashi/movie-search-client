import {useQuery} from '../../../hooks/useQuery';

export function useMovieInput() {
  const {q: input} = useQuery();
  return input;
}