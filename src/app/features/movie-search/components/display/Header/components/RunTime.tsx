import styled from 'styled-components';
import {useMovieContext} from '../../../../context/MovieContext';

const Time =
        styled.time`
            display: flex;
            bottom: 0;
            padding: .75rem;
            color: white;
            font-style: italic;
            &:before {content: '~'}
            &:after {content: '~'}
            > div + div {
                margin-left: .5rem;
            }
        `

export function RunTime() {
  const data = useMovieContext();

  const runtime = data.runtime;
  const length  = +(runtime.split(' min') || '')[0];
  const hours   = Math.floor(length / 60);
  const minutes = length % 60;

  return (
    <Time className="runtime" dateTime={`P${hours}H${minutes}M`}>
      {hours > 0 && <div className="hours">{hours} {(hours ? 'hour' + (hours > 1 ? 's' : '') : '')}</div>}
      {minutes > 0 && <div className="minutes">{minutes} {(minutes ? 'minute' + (minutes > 1 ? 's' : '') : '')}</div>}
    </Time>
  );
}