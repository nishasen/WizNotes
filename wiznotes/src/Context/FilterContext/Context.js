import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { useNote } from '..';
import { GetNotes } from '../../APICalls';
import { Reducer } from './Reducer';
import { Compose,  dateCheck, priorityCheck, tagCheck } from './Utils';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {
    const [filterState, filterDispatch] = useReducer(Reducer, {
        sortByDate: "",
        sortByPriority: "",
        sortByTag: []});
    const { noteState } = useNote();
    const { noteItems } = noteState;
    const filteredNotes = Compose(
        filterState,
        dateCheck,
        priorityCheck,
        tagCheck
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