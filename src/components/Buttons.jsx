import Button from './Button';
import titleButtons from '../utils/titleButtons';
import './Buttons.css';

function Buttons(props) {
  return (
    <div className="buttons">
      {titleButtons.map((titleBtn) => {
        return (
          <Button key={titleBtn} text={titleBtn} getInput={props.getInput} />
        );
      })}
    </div>
  );
}

export default Buttons;
