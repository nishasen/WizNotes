export const Reducer = (filterState, filterAction) => {
    const clearAll = {
        sortByDate: "",
        sortByPriority: "",
        searchByText: "",
        sortByTag: []}
    switch(filterAction.type) {
        case "SET_TAG" : const newTag = filterState.sortByTag.includes(filterAction.payload)
                            ? filterState.sortByTag.filter((note) => note !== filterAction.payload)
                            : [...filterState.sortByTag, filterAction.payload];
                        return { ...filterState, sortByTag: newTag };
        case "SET_PRIORITY" : return { ...filterState, sortByPriority: filterAction.payload };
        case "SET_DATE" : return { ...filterState, sortByDate: filterAction.payload };
        case "SEARCH_NOTE" : return {...filterState, searchByText: filterAction.payload};
        case "CLEAR_FILTER" : return clearAll;
        default: return filterState;
    }
}

