import Buttons from './Buttons';
import './Calculator.css';
import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const getInputValue = (event) => {
    if (Number(event.target.value) === 0) {
      setInput('');
    }

    if (!Number(event.target.value)) return;

    setInput(event.target.value);
  };

  const getInputClickBtn = (btn) => {
    setInput(btn);
  };

  return (
    <div className="calculator">
      <div className="input">
        <input
          className="input__value"
          type="text"
          placeholder={0}
          value={input}
          onChange={getInputValue}
        />
      </div>

      <Buttons getInput={getInputClickBtn} />
    </div>
  );
}

export default Calculator;
