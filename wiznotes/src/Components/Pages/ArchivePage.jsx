import React from 'react';
import { NoteMapping, PageTitle } from '..';
import { useArchive } from '../../Context';
import './Page.css'; 
const ArchivePage = () => {
  const { archiveState } = useArchive();
  const { archiveItems } = archiveState; 
  return (
    <div className="page">
        <PageTitle title="Archive" items={archiveItems?.length} />
        <NoteMapping showArchive={false} showEdit={false} showTrash={false}/>
    </div>
  )
}

export { ArchivePage };