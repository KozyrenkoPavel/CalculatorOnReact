import './BtnStory.css';
import imgStories from '../utils/imgStories';

function BtnStory(props) {
  return (
    <div className="story" onClick={props.getModalWindow}>
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d={imgStories}></path>
      </svg>
    </div>
  );
}

export default BtnStory;
