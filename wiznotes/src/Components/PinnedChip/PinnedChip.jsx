import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { useTheme } from '../../Context';
import "./PinnedChip.css";

const PinnedChip = () => {
    const { themeState } = useTheme();
    const { theme } = themeState;
    const setPinned = theme==="light"? "pinned-light" : "pinned-dark";
  return (
    <div className={`pinned-chip ${setPinned}`}>
        PinnedChip <AiFillPushpin />
    </div>
  )
}

export { PinnedChip };