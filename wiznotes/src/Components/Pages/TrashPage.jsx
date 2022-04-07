import React from 'react';
import { PageTitle, NoteMapping } from '..';
import { useTrash } from '../../Context';
import './Page.css';

const TrashPage = () => {
  const { trashState } = useTrash();
  const { trashItems } = trashState;
  return (
    <div className="page">
        <PageTitle title="Trash" items={trashItems?.length} />
        <NoteMapping showArchive={false} showEdit={false} showTrash={true}/>
    </div>
  )
}

export { TrashPage };