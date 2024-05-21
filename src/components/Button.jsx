import './Button.css';
import getMathematicalOperation from '../utils/getMathematicalOperation';
import getFactorial from '../utils/getFactorial';
import isTrigeometricValue from '../utils/isTrigeometricValue';

let valueInput = '';
let value = '';
let factorial = '';

function Button(props) {
  const getValueBtnInInput = (event) => {
    const target = event.target.innerText;

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
    } else if (isTrigeometricValue(valueInput)) {
      valueInput = valueInput.replace(
        target,
        getMathematicalOperation()[target]
      );
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
