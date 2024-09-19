import './TodoSearch.css';
function TodoSearch({
  searchValue,
  setSearchValue,
}){
  return(
<input 
  value={searchValue}
  onChange={(event)=>
    {setSearchValue(event.target.value);
  }} 
  className='TodoSearch' tabIndex="0" type='text' placeholder='Buscar TODOs'></input>
  );

}
  export {TodoSearch};