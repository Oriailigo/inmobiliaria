import './TodoCounter.css';
function TodoCount({total, completed}){
    return(
  <h1 tabIndex="0" className='TodoCounter'>
    Completaste <span> {completed} </span> de <span>{total}</span> TODOs
  </h1>
    );
  
  }

  export {TodoCount};