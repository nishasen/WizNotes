export const Reducer = (archiveState, archiveAction) => {
    switch(archiveAction.type) {
        case "SET_ARCHIVE" : return { ...archiveState, archiveItems: archiveAction.payload };
        case "ADD_ARCHIVE": return { ...archiveState, archiveItems: archiveAction.payload };
        case "DELETE_ARCHIVE" : return { ...archiveState, archiveItems: archiveAction.payload };
        case "RESTORE_ARCHIVE": return { ...archiveState, archiveItems: archiveAction.payload };
        default: return archiveState;
    }
}