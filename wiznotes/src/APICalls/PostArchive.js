import axios from "axios";

export const PostArchive = async(note, archiveDispatch, noteDispatch) => {
    console.log(note)
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.post(`/api/notes/archives/${note._id}`, { note }, config);
        console.log(response)
        archiveDispatch({ type: "ADD_ARCHIVE", payload: response.data.archives });
        noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
    } catch(error) {
        console.error(error)
    }
}
