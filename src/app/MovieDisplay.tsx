import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useQuery} from './useQuery';
import {useMovieInputQueryParam} from './MovieSearchBar';

const MovieDisplayWrapper =
        styled.div`
            background: aqua;
        `;

interface MovieApiQueryParams {
  input: string;

  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}

function MovieApiQuery({input, onError, onSuccess}: MovieApiQueryParams) {
  useEffect(() => {
    fetch('http://localhost:8001/api', {
      method:  'post',
      headers: {'Content-Type': 'application/json'},
      body:    JSON.stringify({title: input}),
    })
      .then(resp => resp.json())
      .then(onSuccess)
      .catch(onError);
  }, [input]);

  return null;
}

export function MovieDisplay() {
  const input                  = useMovieInputQueryParam();
  const [error, setError]      = useState();
  const [response, setSuccess] = useState();

  return (
    <MovieDisplayWrapper>
      <MovieApiQuery input={input} onError={setError} onSuccess={setSuccess}/>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </MovieDisplayWrapper>
  );
}