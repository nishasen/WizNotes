import axios from "axios";

export const RestoreArchive = async(note, noteDispatch, archiveDispatch=null) => {
    let response;
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        {archiveDispatch ? 
            response = await axios.post(`/api/archives/restore/${note._id}`, {}, config)
        :
            response = await axios.post("/api/notes", { note }, config)
        }
        noteDispatch({type: "ADD_NOTE", payload: response.data.notes})
        if(archiveDispatch){
            archiveDispatch({ type: "RESTORE_ARCHIVE", payload: response.data.archives });
        }
        
    } catch(error) {
        console.error(error)
    }
}