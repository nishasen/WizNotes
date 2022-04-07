import axios from "axios";
import { useEffect, useState } from "react";

export const GetArchive = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [archiveLoading, setArchiveLoading] = useState(true);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("userToken")
                }
            }
            const res = await axios.get("/api/archives", config);
            setResponse(res.data);    
        } catch(error) {
            setError(error);
        } finally {
            setArchiveLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, archiveLoading, error }
}