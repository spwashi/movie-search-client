import {useLocation} from 'react-router-dom';
import {useMemo} from 'react';

export function useQuery() {
  const {search} = useLocation();

  return useMemo(() => Object.fromEntries((new URLSearchParams(search)).entries()), [search]);
}