const Compose = (state, ...functions) => (data) => {
    return functions.reduce((acc, cur)=>cur(state, acc), data)
}

const dateCheck = (state, data) => {
    switch(state.sortByDate) {
        case "oldest" : return [...data].sort((a,b)=>new Date(a.noteDate) - new Date(b.noteDate));
        case "latest" : return [...data].sort((a,b)=>new Date(b.noteDate) - new Date(a.noteDate));
        default: return data;
    }
}

const priorityCheck = (state, data) => {
    switch (state.sortByPriority) {
      case "high":
        return data.filter((item) => item.notePriority === "high");
      case "medium":
        return data.filter((item) => item.notePriority === "medium");
      case "low":
        return data.filter((item) => item.notePriority === "low");
      default:
        return data
    }   
}

const tagCheck = (state, data) => {
    return state.sortByTag.length === 0
      ? data
      : data.filter((note) => state.sortByTag.includes(note.noteTag));
  };

export { Compose, dateCheck, priorityCheck, tagCheck };

