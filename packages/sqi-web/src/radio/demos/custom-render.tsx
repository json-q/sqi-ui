import React from 'react';
import { Button, Divider, Radio } from '@sqi-ui/web';

/**
 * Demonstrates custom rendering of radio buttons and radio groups using the `@sqi-ui/web` library.
 *
 * Renders three sections: a single custom radio button, a radio group with buttons styled based on selection, and a radio group with each option rendered as a styled card block.
 *
 * @returns A React fragment containing the demo UI.
 */
export default function Demo() {
  return (
    <>
      <Divider text="Custom single render" align="left" />
      <Radio>
        {({ checked }) => {
          return (
            <Button tabIndex={-1} type={checked ? 'primary' : 'default'}>
              Custom
            </Button>
          );
        }}
      </Radio>

      <Divider text="Custom radio group render" align="left" />
      <Radio.Group defaultValue="Beijing">
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Radio key={item} value={item}>
              {({ checked }) => {
                return (
                  <Button tabIndex={-1} key={item} type="primary" variant={checked ? 'default' : 'outline'}>
                    {item}
                  </Button>
                );
              }}
            </Radio>
          );
        })}
      </Radio.Group>

      <Divider text="Custom radio group render" align="left" />
      <Radio.Group defaultValue="Beijing">
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Radio value={item} key={item}>
              {({ checked }) => <CardBlock item={item} checked={checked} />}
            </Radio>
          );
        })}
      </Radio.Group>
    </>
  );
}

/**
 * Renders a styled card block representing a radio option, visually highlighting the checked state.
 *
 * Displays the provided item label in bold and a descriptive text. When checked, the card uses brand colors and shows a decorative triangular icon in the top-left corner.
 *
 * @param item - The label to display in the card block
 * @param checked - Whether the card is in the checked (selected) state
 */
function CardBlock({ item, checked }: { item: string; checked: boolean }) {
  const styles: React.CSSProperties = {
    padding: '10px 16px',
    borderRadius: '4px',
    width: '200px',
    boxSizing: 'border-box',
    border: `1px solid ${checked ? 'var(--sqi-brand-color)' : 'var(--sqi-component-border)'}`,
    color: checked ? 'var(--sqi-brand-color)' : '',
    backgroundColor: checked ? 'var(--sqi-brand-color-1)' : '',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '20px 20px 0 0',
    borderColor: 'var(--sqi-brand-color) transparent transparent transparent',
  };

  return (
    <div style={styles}>
      {checked && <div style={iconStyle} />}
      <strong>{item}</strong>
      <div>this is a radio</div>
    </div>
  );
}
