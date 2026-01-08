import React from 'react'
import {useState} from 'react'
import useFetch from './useFetch';
import useDebounce from './useDebounce';
const App = () => {
 const [search,setSearch]=useState("");
 function handleChange(e)
 {
     setSearch(e.target.value);
 }
 const debouncedSearch=useDebounce(search,500);
 const {data,isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/users/{debouncedSearch}');
  return (
    <div>
      <input value={search} onChange={handleChange}/>
    </div>
  );
}

export default App
