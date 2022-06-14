import React from 'react';
import { NoteContainer, NoteMapping, PageTitle, MapChip, SearchTab } from '..';
import { useFilter } from '../../Context';
import './Page.css';

const NotePage = () => {
  const { notes } = useFilter();
  return (
    <div className="page">
        <SearchTab />
        <NoteContainer />
        <MapChip />
        <PageTitle title="Notes" items={notes?.length} />
        <NoteMapping showArchive={true} showEdit={true} showTrash={false}/>
    </div>
  )
}

export { NotePage };