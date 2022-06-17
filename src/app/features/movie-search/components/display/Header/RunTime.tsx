import styled from 'styled-components';

const Time =
        styled.time`
            display: flex;
            position: absolute;
            bottom: 0;
            background: whitesmoke;
            padding: .75rem;
            border: thick solid thistle;
            transform: translateY(50%);
            box-shadow: inset 0 0 .5rem hsl(300, 24%, 20%);
            > div:first-child {
                margin-right: .5rem;
            }
        `

export function RunTime({runtime}: { runtime: string }) {
  const length  = +(runtime.split(' min') || '')[0];
  const hours   = Math.floor(length / 60);
  const minutes =   length % 60;

  return (
    <Time className="runtime" dateTime={`P${hours}H${minutes}M`}>
      {hours && <div className="hours">{hours} {(hours ? 'hour' + (hours > 1 ? 's' : '') : '')}</div>}
      {minutes > 0 && <div className="minutes">{minutes} {(minutes ? 'minute' + (minutes > 1 ? 's' : '') : '')}</div>}
    </Time>
  );
}