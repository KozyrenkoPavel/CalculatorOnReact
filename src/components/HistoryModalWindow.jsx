import './HistoryModalWindow.css';

function HistoryModalWindow(props) {
  const style = {
    display: props.stateModalWindow,
  };

  return (
    <div className="modalWindow" style={style}>
      {props.resultModalWindow}
    </div>
  );
}

export default HistoryModalWindow;
