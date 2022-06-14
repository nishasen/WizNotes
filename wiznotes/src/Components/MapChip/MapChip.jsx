import React from 'react'
import { useNote } from '../../Context';
import { PinnedChip } from '..';
import "./MapChip.css";

const MapChip = () => {
  const { pinned } = useNote();
  return (
    <>
    {pinned?.length===0 ?
      ""
      : 
      <div className="map-chip">
        {pinned.map(item=><PinnedChip item={item} key={item._id}/>)}
      </div>}
    </>  
  )
}

export { MapChip };