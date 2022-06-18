import styled from 'styled-components';
import React from 'react';

const FontSizeWidgetWrapper =
        styled.div`
            background: var(--color-1);
            
            .button-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
            }
            button {
                border: none;
                color: var(--color-1);
                background: var(--color-2);
                &:hover, &:focus, &[aria-selected] {
                    background: var(--color-1);
                    color: var(--color-2);
                    border: thin solid var(--color-2);
                }
            }
        `;

const multiplier = 16;
export function FontSizeWidget() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    button.setAttribute('aria-selected', 'true');
    button.parentNode?.childNodes.forEach((e: any) => {
      if (!/button/i.test(e.tagName)) return;
      if (e !== button) {
        e.removeAttribute('aria-selected')
      } else {

      }
    })

    document.documentElement.style.fontSize = button.style.fontSize;
  };
  return (
    <FontSizeWidgetWrapper>
      <label htmlFor="font-size-container">
        <span>Change Font Size</span>
      </label>
      <div className="button-container" id="font-size-container">
        <button style={{fontSize: (.5 * multiplier) + 'px'}} onClick={onClick}>a</button>
        <button style={{fontSize: (.75 * multiplier) + 'px'}} onClick={onClick}>a</button>
        <button aria-selected style={{fontSize: (1 * multiplier) + 'px'}} onClick={onClick}>a</button>
        <button style={{fontSize: (1.5 * multiplier) + 'px'}} onClick={onClick}>a</button>
        <button style={{fontSize: (2 * multiplier) + 'px'}} onClick={onClick}>a</button>
      </div>
    </FontSizeWidgetWrapper>
  );
}