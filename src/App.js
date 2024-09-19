import React from 'react';
import {TodoCount} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import {ButtonMenu} from './Menu/ButtonMenu';
import {Breadcrumb} from './BreadcrumbNavegacion/Breadcrumb';
import {Input} from './ContactForm/InputForm';
import {CardCont} from './Card/CardCont';
import {AlquilerLayout} from './Alquiler/AlquilerLayout';
import {VentaLayout} from './Ventas/VentasLayout';


const defaultTodos=[
{text:"hacer la cena", completed:false},
{text:"Sacar la basura", completed:true},
{text:"Tomar el curso de React", completed:true},
{text:"Comer sano", completed:false},
]

function App() {
  const [todos, setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue]= React.useState('');

  const completedTodos=todos.filter(
    todo => todo.completed
  ).length;


  const searchTodos=todos.filter(
    todo =>{ 
      let todoText=todo.text.toLowerCase();
      let searchText=searchValue.toLowerCase();
      return todoText.includes(searchText)}
  );

  const totalTodos=todos.length;
  console.log(todos.length);

  const completeTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed=true;
    setTodos(newTodos)
  }

  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  return (
    <>
      <VentaLayout/>      
      <AlquilerLayout/>
      
      <TodoCount 
        completed={completedTodos}
        total={totalTodos}></TodoCount>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodos.map((todo)=>
        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
          >


          </TodoItem>)}

      </TodoList>

  <CreateTodoButton/> 
      
    </>
  );
}


export default App;

