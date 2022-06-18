import styled from 'styled-components';
import React, {useRef} from 'react';

const LightToggleInputWrapper =
        styled.div`
            background: var(--color-1);
            position: relative;
            padding-bottom: 40px;
            i { color: var(--color-2); font-size: 40px; height: 40px; margin-bottom: 10px;}
            input {color: transparent;z-index: -10; border: none}
            input { display: none; }
            .button-container {
                height: 50px;
            }
            button {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                border: none;
                top: 0;
                left: 0;
                background: none;
                width: 100%;
                height: 100%;
                position: absolute;
            }
        `;

const onToggle =
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const onMode  = e.target.checked ? 'light' : 'dark';
          const offMode = e.target.checked ? 'dark' : 'light';
          document.body.classList.add(onMode);
          document.body.classList.remove(offMode);
        };

export function LightToggle() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <LightToggleInputWrapper>
      <label htmlFor="light-toggle">
        <span>Toggle Light</span>
      </label>
      <input type="checkbox" id="light-toggle" onChange={onToggle} ref={inputRef}/>
      <div className="button-container">
        <button onClick={e => inputRef.current?.click()}>
          <i className="fa fa-lightbulb"/>
        </button>
      </div>
    </LightToggleInputWrapper>
  );
}