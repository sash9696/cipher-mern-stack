import { useEffect, useState } from "react";


export const useFetchApi  = (url) => {

    // console.log('useFetchApi called',url)
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data) )
        .catch((error) => setError(error))
    
      }, [])
  
    return {data,error};





}