import * as React from 'react';
import '../style.css';
import ButtonGroup from './ButtonGroup';

type ButtonProps = {
  bgcolor?: string;
  text: string;
  doClick: () => void;
};

export default function Button({
  bgcolor = 'green',
  text = 'somthing',
  doClick,
}: ButtonProps) {
  return (
    <button
      onClick={doClick}
      style={{ backgroundColor: bgcolor, width: '100px' }}
    >
      {text}
    </button>
  );
}
