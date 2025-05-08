"use client"

import React, { useState } from "react";

interface Level {
  id: number;
  color: string;
}

const levels: Level[] = [
  { id: 1, color: "#CC4444" },
  { id: 2, color: "#E68A00" },
  { id: 3, color: "#E6B800" },
  { id: 4, color: "#33AA88" },
  { id: 5, color: "#4477CC" },
  { id: 6, color: "#AA66CC" },
  { id: 7, color: "#8888CC" },
];

const SegmentedPyramid: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const topY = 40;
  const bottomY = 360;
  const baseLeft = 40;
  const baseRight = 360;
  const apexX = 200;
  const totalLayers = levels.length;
  const layerHeight = (bottomY - topY) / totalLayers;

  const getX = (y: number): { left: number; right: number } => {
    const left = apexX + ((baseLeft - apexX) * (y - topY)) / (bottomY - topY);
    const right = apexX + ((baseRight - apexX) * (y - topY)) / (bottomY - topY);
    return { left, right };
  };

  return (
   <div className="flex flex-col items-center">
     <svg width="500" height="500" viewBox="0 0 400 400">
      {levels.map((level, index) => {
        const i = totalLayers - index - 1; // reverse order for drawing from top down
        const yTop = topY + i * layerHeight;
        const yBottom = topY + (i + 1) * layerHeight;

        const topX = getX(yTop);
        const bottomX = getX(yBottom);

        const points =
          i === 0
            ? `${apexX},${topY} ${bottomX.left},${yBottom} ${bottomX.right},${yBottom}`
            : `${topX.left},${yTop} ${topX.right},${yTop} ${bottomX.right},${yBottom} ${bottomX.left},${yBottom}`;

        return (
          <polygon
            key={level.id}
            points={points}
            fill={selected === level.id ? "#FF8888" : level.color}
            onClick={() => setSelected(level.id)}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </svg>

    <div className="mt-3 font-bold">
        Level: {selected}
    </div>
   </div>
  );
};

export default SegmentedPyramid;
