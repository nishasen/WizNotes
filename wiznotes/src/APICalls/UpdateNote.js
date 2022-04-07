import axios from "axios";

export const UpdateNote = async(note, noteDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.post(`/api/notes/${note._id}`, { note }, config);
        noteDispatch({ type: "UPDATE_NOTE", payload: response.data.notes });
    } catch(error) {
        console.error(error)
    }
}