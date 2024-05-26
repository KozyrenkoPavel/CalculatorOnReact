import './Calculator.css';
import Buttons from './Buttons';
import BtnStory from './BtnStory';
import HistoryModalWindow from './HistoryModalWindow';
import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [modalWindow, setModalWindow] = useState('none');
  const [resultModalWindow, setRusltModalWindow] = useState(input);

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

  function getModalWindow() {
    if (modalWindow === 'none') {
      setModalWindow('block');
    } else {
      setModalWindow('none');
    }
  }

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

        <BtnStory getModalWindow={getModalWindow} />
        <HistoryModalWindow
          stateModalWindow={modalWindow}
          resultModalWindow={resultModalWindow}
        />
      </div>

      <Buttons
        setRusltModalWindow={setRusltModalWindow}
        getInput={getInputClickBtn}
      />
    </div>
  );
}

export default Calculator;
