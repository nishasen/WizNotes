import React from 'react';
import { NoteContainer, NoteMapping, PageTitle, MapChip, SearchTab } from '..';
import { useNote } from '../../Context';
import './Page.css';

const NotePage = () => {
  const { noteState } = useNote();
  const { noteItems } = noteState;
  return (
    <div className="page">
        <SearchTab />
        <NoteContainer />
        {/* <MapChip /> */}
        <PageTitle title="Notes" items={noteItems?.length} />
        <NoteMapping showArchive={true} showEdit={true} showTrash={false}/>
    </div>
  )
}

export { NotePage };