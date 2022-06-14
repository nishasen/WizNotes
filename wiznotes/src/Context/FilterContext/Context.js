import { createContext, useContext, useReducer } from 'react';
import { useNote } from '..';
import { GetNotes } from '../../APICalls';
import { Reducer } from './Reducer';
import { Compose,  dateCheck, priorityCheck, tagCheck, searchCheck } from './Utils';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {
    const [filterState, filterDispatch] = useReducer(Reducer, {
        sortByDate: "",
        sortByPriority: "",
        searchByText: "",
        sortByTag: []});
    const { noteState } = useNote();
    const { noteItems } = noteState;
    const filteredNotes = Compose(
        filterState,
        dateCheck,
        priorityCheck,
        tagCheck,
        searchCheck
    )(noteItems);
       
    return (
        <FilterContext.Provider value={{
            notes: filteredNotes, 
            filterState, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    );
}

export { useFilter, FilterProvider };