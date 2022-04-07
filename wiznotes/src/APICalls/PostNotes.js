import axios from "axios";

export const PostNotes = async(note, noteDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.post("/api/notes", { note }, config);
        noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
    } catch(error) {
        console.error(error)
    }
}
