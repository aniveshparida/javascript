import {useState,useEffect} from 'react';
function useFetch(url)
{
   const[data,setData]=useState(null);
   const[isLoading,setIsLoading]=useState(false);
   const[error,setError]=useState(null);
   useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;
    setIsLoading(true);
    setError(null);
    fetch(url,{signal})
    .then((res)=>{
        if(!res.ok)
            throw new error("Something went wrong");
        return res.json
    })
    .then((data)=>{
        setData(data);
    })
    .catch((err)=>{
        if(err.name=="AbortError")return;
        setError(err.message);
    })
    setIsLoading(false);
    return (()=>{
        controller.abort();
    })
},[url])
return {data,isLoading,error};
}
export default useFetch;