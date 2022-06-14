import React, { useState } from 'react';
import { IoCloseCircle } from 'react-icons/io5';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';
import { labels } from '../../GeneralFunctions';
import { Button, CheckboxRadio, Editor, Icon } from '..';
import { useFilter, useNote, useTheme } from '../../Context';
import './NoteContainer.css';
import { PostNotes, UpdateNote } from '../../APICalls';

const NoteContainer = () => {
  const { themeState } = useTheme();
  const { theme } = themeState;
  const [showPriority, setShowPriority] = useState(true);
  const [showLabel, setShowLabel] = useState(true);
  const { filterDispatch } = useFilter();
  const { form, setForm, noteDispatch, showForm, setShowForm } = useNote();
  const noteContainerTheme = theme === "light" ? "note-light" : "note-dark";
  const setText = theme=== "light" ? "text-light" : "text-dark";  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    if(form.hasOwnProperty('_id')) {
      UpdateNote(form, noteDispatch)
    } else {
      PostNotes(form, noteDispatch);
    }
    setShowForm(false);
    setForm({
      noteTitle: "",
      noteBody: "",
      notePriority: "low",
      noteTag: "home", 
      noteDate: new Date().toLocaleString()
    });
  }
  
  return (
    <div> 
      <div className="add-note">
        <Button text={showForm ? "Hide note 📤" : "Add a note 📥"} 
                size="large" 
                buttonborder={true} 
                onClick={()=>setShowForm(!showForm)}/>
      </div>
      {showForm && 
      <form className={`note-container ${noteContainerTheme}`} onSubmit={(e)=>handleSubmit(e)}>
        <div className="note-header">
          <input type="text" 
                  placeholder="Enter title" 
                  name="noteTitle" 
                  className="note-title" 
                  value={form.noteTitle} 
                  onChange={(e)=>handleChange(e)} required/>
          {showPriority ? 
          <Icon>
            <IoIosArrowDropupCircle onClick={()=>setShowPriority(false)}/>
          </Icon>
          :
          <Icon>
            <IoIosArrowDropdownCircle onClick={()=>setShowPriority(true)}/>
          </Icon>}
          
        </div>  
        <div className="priority-container">
          {showPriority && 
          <div className="dropdown">
            <CheckboxRadio type="radio"
                          name="notePriority"
                          value="high"
                          label="High"
                          forLabel="high"
                          labelClassName="text-black" 
                          checked={form.notePriority==="high"}
                          onChange={(e)=>handleChange(e)} required/>     
            <CheckboxRadio type="radio"
                          name="notePriority"
                          value="medium"
                          label="Medium"
                          forLabel="medium"
                          checked={form.notePriority==="medium"}
                          labelClassName="text-black" onChange={(e)=>handleChange(e)} required/>     
            <CheckboxRadio type="radio"
                          name="notePriority"
                          value="low"
                          label="Low"
                          forLabel="low"
                          checked={form.notePriority==="low"}
                          labelClassName="text-black" onChange={(e)=>handleChange(e)} required/>                                      
          </div>}
        </div>
        <Editor value={form.noteBody}
                setValue={(e)=>setForm({...form, noteBody: e})}/>
        <div className="note-actions">
          <Icon>
            <FaTag className="note-icons" onClick={()=>setShowLabel(!showLabel)}/>
          </Icon>
          <button className="btn-submit" type="submit" onClick={()=>filterDispatch({type: "CLEAR_FILTER"})}>
          <Icon>
            <BsFillPlusCircleFill className="note-icons"/>
          </Icon>
          </button>
          <Icon>
            <IoCloseCircle className="note-icons" onClick={()=>{
                                                        setForm({
                                                          noteTitle: "",
                                                          noteBody: "",
                                                          notePriority: "low",
                                                          noteTag: "home", 
                                                          noteDate: new Date().toLocaleString()
                                                        })
                                                        setShowForm(false)}}/>
          </Icon>
        </div>
        {showLabel && <div>
          <div className="tag-container labels dis-grid">
                {labels.map(({label, name, value, type, forLabel})=><CheckboxRadio label={label}
                                                                                    name={name}
                                                                                    value={value}
                                                                                    type={type}
                                                                                    forLabel={forLabel}
                                                                                    labelClassName={setText}
                                                                                    checked={form.noteTag===value}
                                                                                    onChange={(e)=>handleChange(e)} required/>)}
              </div>
        </div>}  
      </form>}
    </div>
  )
}

export { NoteContainer };