import React, { useState } from 'react';
import { useFilter, useTheme } from '../../Context';
import { Button, CheckboxRadio, Icon } from '..';
import { BsFilterRight } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { tagsData } from '../../GeneralFunctions';
import './SearchTab.css';

const SearchTab = () => {
    const { themeState } = useTheme();
    const { theme } = themeState;
    const [ showFilter, setShowFilter ] = useState(false); 
    const { filterDispatch, filterState } = useFilter(); 
    const { sortByPriority, sortByDate, sortByTag } = filterState;
    const ShowFilterBox = () => {
      setShowFilter(true)
    }
    const setText = theme==="light" ? "text-light" : "text-dark";   
                                                                                                                                                                                                                                               
  return (
    <div className="searchtab">
        <div className="searchbar">
            <input type="search" placeholder="Search your choice..." className={`basic-textfield-outlined search-box`}/>
            <button className={`btn-md icon-md search-button ${theme==="light" ? "search-light" : "search-dark"}`}>
            Search
            </button>
        </div>
        <button className={`filter-button ${theme==="light" ? "button-light" : "button-dark"}`} onClick={ShowFilterBox}>Filter <BsFilterRight /></button>
        {showFilter && <div className="modal">
          <div className={`modal-content ${theme==="light" ? "modal-light" : "modal-dark"}`}>
            <div className="filter-header">
              <h3 className={setText}>Tags</h3>
              <Icon>
                <MdClose className="filter-icon" onClick={()=>setShowFilter(false)}/>
              </Icon>
            </div>
            <hr />
            <div className="tag-container dis-grid">
              {tagsData.map(({label, name, value, type, forLabel})=><CheckboxRadio label={label}
                                                                                  name={name}
                                                                                  value={value}
                                                                                  type={type}
                                                                                  forLabel={forLabel}
                                                                                  labelClassName={setText}
                                                                                  checked={sortByTag.includes(value)}
                                                                                  onChange={(e)=>filterDispatch({type: "SET_TAG", payload: e.target.value})}/>)}
            </div>
            <h3 className={setText}>Sort by date</h3>
            <hr />
            <div className="tag-container dis-grid">
              <CheckboxRadio label="Oldest" 
                            name="sortByDate"
                            value="oldest"
                            type="radio"
                            forLabel="oldest"
                            labelClassName={setText} 
                            checked={sortByDate==="oldest"}
                            onChange={(e)=>filterDispatch({type: "SET_DATE", payload: e.target.value})}/>
              <CheckboxRadio label="Latest" 
                            name="sortByDate"
                            value="latest"
                            type="radio"
                            forLabel="latest"
                            labelClassName={setText}
                            checked={sortByDate==="latest"} 
                            onChange={(e)=>filterDispatch({type: "SET_DATE", payload: e.target.value})}/>              
            </div>
            <h3 className={setText}>Sort by priority</h3>
            <hr />
            <div className="tag-container dis-grid">
              <CheckboxRadio label="High" 
                            name="sortByPriority"
                            value="high"
                            type="radio"
                            forLabel="high"
                            labelClassName={setText} 
                            checked={sortByPriority==="high"}
                            onChange={(e)=>filterDispatch({type: "SET_PRIORITY", payload: e.target.value})}/>
              <CheckboxRadio label="Medium" 
                            name="sortByPriority"
                            value="medium"
                            type="radio"
                            forLabel="medium"
                            labelClassName={setText}
                            checked={sortByPriority==="medium"} 
                            onChange={(e)=>filterDispatch({type: "SET_PRIORITY", payload: e.target.value})}/>   
              <CheckboxRadio label="Low" 
                            name="sortByPriority"
                            value="low"
                            type="radio"
                            forLabel="low"
                            labelClassName={setText} 
                            checked={sortByPriority==="low"}
                            onChange={(e)=>filterDispatch({type: "SET_PRIORITY", payload: e.target.value})}/>                            
            </div>
            <div className="clear-btn">
              <Button text="Clear filter"
                      buttonborder="true" 
                      onClick={()=>filterDispatch({type: "CLEAR_FILTER"})}/>
            </div>        
          </div>
        </div>}
    </div>
  );
}

export { SearchTab };