import React, { useState } from 'react';
import { Icon } from '..';
import './Card.css';
import { BsPinAngle, BsPinAngleFill, BsTrash } from 'react-icons/bs';
import { IoColorPalette } from 'react-icons/io5';
import { RiFileEditFill } from 'react-icons/ri';
import { BiArchiveIn } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { MdRestorePage } from 'react-icons/md';
import { useArchive, useNote, useTheme, useTrash } from '../../Context';
import { DeleteArchive, DeleteNote, PostArchive, RestoreArchive } from '../../APICalls';

const Card = ({showArchive, showEdit, showTrash, note}) => {
  const { noteTitle, noteBody, noteTag, notePriority, noteDate, _id } = note;
  const { trashDispatch } = useTrash();
  const { themeState } = useTheme();
  const { theme } = themeState;
  const [showPalette, setShowPalette] = useState(false);
  const [background, setBackground] = useState("");
  const { archiveDispatch } = useArchive();
  const { setForm, noteDispatch, setShowForm, setPinned, pinned } = useNote();
  const setBackgroundColor = (color) => {
   localStorage.setItem(note._id, color);  
   setBackground(color);
  }
  const textTheme = theme==="light" ? "text-light" : "text-dark";
  const cardBg = theme==="light" ? "card-light" : "card-dark";
  return (
    <div className={`card ${cardBg}`} style={{backgroundColor: localStorage.getItem(note._id)}}>
      <div className="priority-tag">
        <div className={`tag ${theme==="light" ? "light-priority" : "dark-priority"}`}>{notePriority.toUpperCase()}</div>
        <div className={`tag ${theme==="light" ? "light-tag" : "dark-tag"}`}>{noteTag.toUpperCase()}</div>
      </div> 
      <div className="card-header">
        <div className="title-div">
          <h3 className={`card-title ${textTheme}`}>{noteTitle}</h3>
        </div>
        {showArchive ? pinned.find(note => note._id===_id) ? <Icon>
          <BsPinAngleFill className="card-icon" onClick={()=>setPinned(pinned.filter(note=> note._id!==_id))}/>
        </Icon>
        :
        <Icon>
          <BsPinAngle className="card-icon" onClick={()=>setPinned((prev)=>[...prev, note])}/>
        </Icon>
        :
        ""}
      </div>
      <div className={`card-date ${textTheme}`}>{noteDate}</div>
      <p className={`card-desc ${textTheme}`} 
        dangerouslySetInnerHTML={{
          __html: noteBody,
        }}></p>
      <div className="card-actions">
        <Icon>
          <IoColorPalette className="note-icons" onClick={()=>setShowPalette(!showPalette)} />
        </Icon>
        {showEdit && <Icon>
          <RiFileEditFill className="card-icons" onClick={()=>{
                                                  setForm(note)
                                                  setShowForm(true)}}/>
        </Icon>}
        {showTrash ?
        <Icon>
          <MdRestorePage className="card-icons" onClick={()=>{
                                          RestoreArchive(note, noteDispatch)
                                          trashDispatch({type: "DELETE_TRASH", payload: note._id})}}/>
        </Icon>
        :
        showArchive ? 
        <Icon>
          <BiArchiveIn className="card-icons" onClick={()=>PostArchive(note, archiveDispatch, noteDispatch)}/>
        </Icon> : 
        <Icon>
          <MdRestorePage className="card-icons" onClick={()=>RestoreArchive(note, noteDispatch, archiveDispatch)}/>
        </Icon>}
        {showTrash ? 
        <Icon >
          <BsTrash className="card-icons" onClick={()=>
                                          trashDispatch({type: "DELETE_TRASH", payload: note._id})}/>
        </Icon> : 
        showArchive ? 
        <Icon >
          <BsTrash className="card-icons" onClick={()=>{
                                  trashDispatch({type: "ADD_TRASH", payload: note})
                                  DeleteNote(note._id, noteDispatch)}}/>
        </Icon> : 
        <Icon >
          <BsTrash className="card-icons" onClick={()=>{
                                  trashDispatch({type: "ADD_TRASH", payload: note})
                                  DeleteArchive(note._id, archiveDispatch)}}/>
        </Icon>}
      </div> 
      {showPalette &&
      <div className="palette">
        <div className="colors gryffindor" onClick={()=>setBackgroundColor("#AD1F2F")}>{background==="#AD1F2F" && <TiTick className="tick"/>}</div>
        <div className="colors hufflepuff" onClick={()=>setBackgroundColor("#A45F3D")}>{background==="#A45F3D" && <TiTick className="tick"/>}</div>
        <div className="colors ravenclaw" onClick={()=>setBackgroundColor("#345883")}>{background==="#345883" && <TiTick className="tick"/>}</div>
        <div className="colors slytherin" onClick={()=>setBackgroundColor("#1C734F")}>{background==="#1C734F" && <TiTick className="tick"/>}</div>
      </div>
      }
    </div>
  )
}

export { Card };