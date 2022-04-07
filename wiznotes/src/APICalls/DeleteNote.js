import axios from 'axios';

export const DeleteNote = async(noteId, noteDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.delete(`/api/notes/${noteId}`, config);
        noteDispatch({ type: "DELETE_NOTE", payload: response.data.notes })
    } catch(error) {
        console.log(error)
    }
}