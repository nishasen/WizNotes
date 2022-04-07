import { createContext, useContext, useReducer, useEffect } from 'react';
import { Reducer } from './Reducer';

const TrashContext = createContext();
const useTrash = () => useContext(TrashContext);

const TrashProvider = ({children}) => {
    const [trashState, trashDispatch] = useReducer(Reducer, {trashItems: []});
   
    return (
        <TrashContext.Provider value={{trashState, trashDispatch}}>
            {children}
        </TrashContext.Provider>
    );
}

export { useTrash, TrashProvider };