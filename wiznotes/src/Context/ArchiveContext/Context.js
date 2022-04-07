import { createContext, useContext, useReducer, useEffect } from 'react';
import { GetArchive } from '../../APICalls';
import { Reducer } from './Reducer';

const ArchiveContext = createContext();
const useArchive = () => useContext(ArchiveContext);

const ArchiveProvider = ({children}) => {
    const [archiveState, archiveDispatch] = useReducer(Reducer, {archiveItems: []});
    const { response, archiveLoading, error } = GetArchive();

    useEffect(()=>{
        archiveDispatch({type: "SET_ARCHIVE", payload: response.archives || []})  
    }, [response])
   
    return (
        <ArchiveContext.Provider value={{archiveState, archiveDispatch, archiveLoading, error}}>
            {children}
        </ArchiveContext.Provider>
    );
}

export { useArchive, ArchiveProvider };