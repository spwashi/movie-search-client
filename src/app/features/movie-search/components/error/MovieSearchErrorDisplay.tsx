import styled from 'styled-components';
import {MovieApiQueryFailResponse} from '../../query/MovieApiQuery';
import React from 'react';

const MovieErrorDisplayWrapper =
        styled.pre`
            position: absolute;
            background: var(--color-4);
            color: var(--color-5);
            font-weight: bold;
            font-size: 2rem;
            padding: 1rem;
        `;
export function MovieSearchErrorDisplay({error}: { error: MovieApiQueryFailResponse }) {
  return <MovieErrorDisplayWrapper>{error.error}</MovieErrorDisplayWrapper>;
}