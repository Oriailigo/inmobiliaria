import './CreateTodoButton.css';
function CreateTodoButton(props){
    return(
  <button className='CreateTodoButton' onClick={(event)=>{console.log("hizo click"); console.log(event);}}>+</button>
    );
  
  }

  export {CreateTodoButton};