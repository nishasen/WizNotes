import axios from "axios";
import { useEffect, useState } from "react";

export const GetNotes = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [noteLoading, setNoteLoading] = useState(true);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("userToken")
                }
            }
            const res = await axios.get("/api/notes", config);
            setResponse(res.data);   
        } catch(error) {
            setError(error);
        } finally {
            setNoteLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, noteLoading, error }
}