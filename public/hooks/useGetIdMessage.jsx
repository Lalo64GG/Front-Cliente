import { useState, useEffect } from "react";
import { API } from "./api";

export function useGetIdMessage(id) {

    const url = `${API}/messages/${id}`

    const [data, setData] = useState([ ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController(); // ayuda a cancelar el fetch
        setController(abortController);
        setLoading(true);
        fetch(url, {signal: abortController.signal})
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((error) => {
            if (error.name === "AbortError") {
                console.log("Request cancelled");
            }
            setError(error)
         })
         .finally( () => setLoading(false));

         return () => abortController.abort();
    }, [id]);

    const handleCancelRequest = () =>{
        if (controller) {
         controller.abort();   
         setError('Request cancelled')
        }
        
    }



    return { data, loading, error, handleCancelRequest };
}
