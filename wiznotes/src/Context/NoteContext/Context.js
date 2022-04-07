import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { GetNotes } from '../../APICalls';
import { Reducer } from './Reducer';

const defaultForm = {
    noteTitle: "",
    noteBody: "",
    notePriority: "low",
    noteTag: "home", 
    noteDate: new Date().toLocaleString()
}

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NoteProvider = ({children}) => {
    const [noteState, noteDispatch] = useReducer(Reducer, {noteItems: []});
    const { response, noteLoading, error } = GetNotes();
    const [form, setForm] = useState(defaultForm);
    const [showForm, setShowForm] = useState(false);
    useEffect(()=>{
        noteDispatch({type: "SET_NOTE", payload: response.note || []})  
    }, [response])

    return (
        <NoteContext.Provider value={{form, setForm, 
                                    noteState, noteDispatch, 
                                    noteLoading, error, 
                                    showForm, setShowForm}}>
            {children}
        </NoteContext.Provider>
    );
}

export { useNote, NoteProvider };