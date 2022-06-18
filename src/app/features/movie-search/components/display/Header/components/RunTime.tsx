import styled from 'styled-components';
import {useMovieContext} from '../../../../context/MovieContext';

const Time =
        styled.time`
            display: flex;
            bottom: 0;
            padding: .75rem;
            color: var(--color-2);
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

  let hasHours   = hours > 0;
  let hasMinutes = minutes > 0;
  if (!(hasMinutes || hasMinutes)) return null;
  return (
    <Time className="runtime" dateTime={`P${hours}H${minutes}M`}>
      {hasHours && <div className="hours">{hours} {(hours ? 'hour' + (hours > 1 ? 's' : '') : '')}</div>}
      {hasMinutes && <div className="minutes">{minutes} {(minutes ? 'minute' + (minutes > 1 ? 's' : '') : '')}</div>}
    </Time>
  );
}