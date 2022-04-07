import React from 'react';
import "./NoteMapping.css";
import { Card } from '..';
import { useArchive, useFilter, useTrash } from '../../Context';

const NoteMapping = ({showArchive, showEdit, showTrash}) => {
  const { notes } = useFilter();
  const { archiveState } = useArchive();
  const { archiveItems } = archiveState;
  const { trashState } = useTrash();
  const { trashItems } = trashState;
  return (
    <div className="note-mapping">
      {showTrash ? 
        trashItems?.map(note=><Card showArchive={showArchive} 
                                  showTrash={showTrash} 
                                  showEdit={showEdit} 
                                  key={note._id} 
                                  note={note}/>) 
      : 
      showArchive ? 
        notes.map(note=><Card showArchive={showArchive} 
                                  showTrash={showTrash} 
                                  showEdit={showEdit} 
                                  key={note._id} 
                                  note={note}/>) 
      : 
        archiveItems.map(note=><Card showArchive={showArchive} 
                                    showTrash={showTrash} 
                                    showEdit={showEdit} 
                                    key={note._id} 
                                    note={note}/>)}
    </div>
  )
}

export { NoteMapping };