import './Button.css';
import getMathematicalOperation from '../utils/getMathematicalOperation';
import getFactorial from '../utils/getFactorial';
import isTrigeometricValue from '../utils/isTrigeometricValue';

let valueInput = '';
let value = '';
let factorial = '';
let resultModalWindow = '';
let arrayResultModalWindow = [];
let resultModal = '';
let isEquals = false;

function Button(props) {
  const getValueBtnInInput = (event) => {
    const target = event.target.innerText;

    if (isEquals) {
      value = '';
      valueInput = '';
      isEquals = false;
    }

    valueInput += target;
    value += getMathematicalOperation()[target];

    if (target === 'AC') {
      value = '';
      valueInput = '';
    } else if (target === 'x!') {
      if (getFactorial(value.slice(-1)) === 'Error') {
        value = '';
        valueInput = '';
        return props.getInput('Error');
      }

      valueInput = valueInput.replace('x!', '!');
      factorial = getFactorial(value.slice(-1));
      value = value.slice(0, -1) + factorial;
    } else if (target === '=') {
      value = eval(value);
      valueInput = value;

      resultModalWindow = resultModalWindow + ' = ' + valueInput;
      arrayResultModalWindow.push(resultModalWindow);
      isEquals = true;
    } else if (isTrigeometricValue(valueInput)) {
      valueInput = valueInput.replace(
        target,
        getMathematicalOperation()[target]
      );
    }

    if (target !== '=') {
      resultModalWindow = valueInput;
    }

    props.setRusltModalWindow(resultModalWindow);

    if (arrayResultModalWindow.length !== 0) {
      arrayResultModalWindow.forEach((result) => {
        if (!resultModal.includes(result)) {
          return (resultModal += result + ';' + '\n');
        }
      });

      props.setRusltModalWindow(resultModal);
    }

    props.getInput(valueInput);
  };

  return (
    <div className="button">
      <button className="button__btn" onClick={getValueBtnInInput}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
