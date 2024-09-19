import './TodoItem.css';
function TodoItem(props){
  return(

    <li className='TodoItem'>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} tabIndex="0"
        onClick={props.onComplete}
      >V
        
        </span>  
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete' }`} tabIndex="0">{props.text}</p>
      <span className='Icon Icon-delete' tabIndex="0"
        onClick={props.onDelete}
      >X</span>
    </li>
  );

}

  export {TodoItem};