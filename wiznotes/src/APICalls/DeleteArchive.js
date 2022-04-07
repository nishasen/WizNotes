import axios from 'axios';

export const DeleteArchive = async(noteId, archiveDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.delete(`/api/archives/delete/${noteId}`, config);
        archiveDispatch({ type: "DELETE_ARCHIVE", payload: response.data.archives })
    } catch(error) {
        console.log(error)
    }
}