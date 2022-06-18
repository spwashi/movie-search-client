import styled from 'styled-components';
import React, {useState} from 'react';
import {FontSizeWidget} from './widgets/FontSize';
import {LightToggle} from './widgets/LightToggle';

const Wrapper = styled.div`
    position: fixed;
    bottom: 3rem;
    display: flex;
    flex-direction: column;
    z-index: 100;

    > label {
        background-color: var(--color-1);
        padding: .5rem;
        border: thin solid var(--color-2);
        position: relative;
        button {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            white-space: nowrap;

        }
        i {
            color: var(--color-2);
            font-size: 2rem;
        }
    }

    > label button {
        background-color: transparent;
    }
    &.open {
        color: transparent;
        > label {
            display: flex;
            align-items: center;
            button {
                border: none;
                background-color: var (--color-1);
                position: relative;
                span {
                    color: var(--color-2);
                }
            }
        }
        > label button {
            &:active, &:focus {
                background-color: var (--color-1);
                span {
                }
            }
        }
    }

    &.closed {
        .widget-container {
            display: none;
        }
        > label button {
            background-color: transparent;
            color: transparent;
            &:active, &:focus {
                color: var(--color-2);
                background: var (--color-1);
            }
        }
        label span {
            position: absolute;
            top: 100%;
            left: 0;
            padding: .5rem;
        }
    }


    .widget-container > * {
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        label {
            display: inline-block;
            width: 100%;
            text-align: center;
            span {
                display: block;
                color: var(--color-2);
                padding: .5rem;
                margin-bottom: .5rem;
                border-bottom: thin solid var(--color-2);
            }
        }
        width: 100%;
        border: thin solid var(--color-2);
        transition: background-color .3s;
        button {
            transition: background-color .3s;
            cursor: pointer;
        }
    }
`;
export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const instructionName = `${open ? 'Close' : 'Open'} Accessibility Menu`;
  return (
    <Wrapper className={open ? 'open' : 'closed'}>
      <label title={instructionName}>
        <i className="fa fa-universal-access" aria-hidden/>
        <button onClick={e => setOpen(!open)}>
          <span>{instructionName}</span>
        </button>
      </label>
      <div className="widget-container">
        <FontSizeWidget/>
        <LightToggle/>
      </div>
    </Wrapper>
  )
}