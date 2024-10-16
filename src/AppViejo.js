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
import {EmprendimientoLayout} from './Emprendimientos/EmprendimientoLayout';
import {ContactoLayout} from './Contacto/ContactoLayout';
import {VentaLayout} from './Ventas/VentasLayout';
import { AboutUs } from './QuienesSomos/QuienesLayout';
import { PropertySearchPage } from './VerMapa/VerMapaLayout';
import { LoginContainer } from './Login/LoginLayout';


const defaultTodos=[
{text:"hacer la cena", completed:false},
{text:"Sacar la basura", completed:true},
{text:"Tomar el curso de React", completed:true},
{text:"Comer sano", completed:false},
]

function AppViejo() {
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
      <EmprendimientoLayout/>    
      <ContactoLayout/>      
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


export default AppViejo;

