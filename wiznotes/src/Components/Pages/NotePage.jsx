import React from 'react';
import { NoteContainer, NoteMapping, PageTitle, MapChip, SearchTab, Button } from '..';
import { useFilter } from '../../Context';
import './Page.css';

const NotePage = () => {
  const { notes, filterDispatch } = useFilter();
  return (
    <div className="page">
        <SearchTab />
        <Button text="Show all notes" buttonborder={true} onClick={()=>filterDispatch({type: "CLEAR_FILTER"})}/>
        <NoteContainer />
        <MapChip />
        <PageTitle title="Notes" items={notes?.length} />
        <NoteMapping showArchive={true} showEdit={true} showTrash={false}/>
    </div>
  )
}

export { NotePage };