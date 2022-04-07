import React from 'react'
import { PinnedChip } from '..';
import "./MapChip.css";
const chip = [1, 2,3, 4,5,6,7,8,9]
const MapChip = () => {
  return (
    <div className="map-chip">
        {chip.map(item=><PinnedChip key={item}/>)}
    </div>
  )
}

export { MapChip };