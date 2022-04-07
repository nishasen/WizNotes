export const Reducer = (noteState, noteAction) => {
    switch(noteAction.type) {
        case "SET_NOTE" : return { ...noteState, noteItems: noteAction.payload };
        case "ADD_NOTE": return { ...noteState, noteItems: noteAction.payload };
        case "DELETE_NOTE" : return { ...noteState, noteItems: noteAction.payload };
        case "UPDATE_NOTE": return { ...noteState, noteItems: noteAction.payload };
        default: return noteState;
    }
}

