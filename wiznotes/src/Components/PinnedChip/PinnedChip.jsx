import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { useNote, useTheme } from '../../Context';
import "./PinnedChip.css";

const PinnedChip = ({item}) => {
    const { themeState } = useTheme();
    const { theme } = themeState;
    const { setForm, setShowForm } = useNote();
    const setPinned = theme==="light"? "pinned-light" : "pinned-dark";
  return (
    <div className={`pinned-chip ${setPinned}`} onClick={()=>{
      setForm(item)
      setShowForm(true)}}>
        {item?.noteTitle} <AiFillPushpin />
    </div>
  )
}

export { PinnedChip };