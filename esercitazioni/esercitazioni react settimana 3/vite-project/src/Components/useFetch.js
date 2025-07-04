import  {useState, useEffect} from 'react'

const useFetch = (url) => {
 
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    
    useEffect(() =>{
        if (!url) return;

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try{
                const response = await fetch(url, { signal});
                if (!response.ok){
                    throw new Error(`errore: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }
            catch(err){
                if (err.name !== 'AbortError'){
                    setError(err.message);
                    setData(null)
                }
            } finally{
                setLoading(false)
            }
            

        }
        fetchData();

        return () => {
            controller.abort();
        }
    }, [url])
return { data, loading, error }
}

export default useFetch