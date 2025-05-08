"use client"

import React, { useState } from "react";

interface Level {
  id: number;
  color: string;
}

const levels: Level[] = [
  { id: 1, color: "#CC4444" },
  { id: 2, color: "#E6B800" },
  { id: 3, color: "#33AA88" },
  { id: 4, color: "#4477CC" },
  { id: 5, color: "#AA66CC" },
];

const SegmentedPyramid: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  // Bigger triangle bounds
  const topY = 40;
  const bottomY = 360;
  const baseLeft = 40;
  const baseRight = 360;
  const apexX = 200;
  const totalLayers = levels.length;
  const layerHeight = (bottomY - topY) / totalLayers;

  // Get X coordinates on the left/right edges at a given Y
  const getX = (y: number): { left: number; right: number } => {
    const left = apexX + ((baseLeft - apexX) * (y - topY)) / (bottomY - topY);
    const right = apexX + ((baseRight - apexX) * (y - topY)) / (bottomY - topY);
    return { left, right };
  };

  const displayName = (num: number):string => {
    switch (num) {
      case 1:
        return "Procesgebied"
      case 2:
        return "Processen"
      case 3:
        return "Dialogen"
      case 4:
        return "Functies"
      case 5:
        return "Rollen"
      default:
        return "None selected"
    }
  }

  return (
    <div className="flex flex-col gap-3 items-center"> 
    <div className="font-bold text-xl mb-2 mt-3 text-center">Procesgebouw</div>
    <svg width="500" height="500" viewBox="0 0 400 400">
      {levels.map((level, i) => {
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

    <div className="font-bold">
        Level: {displayName(selected!)}
    </div>
    </div>
  );
};

export default SegmentedPyramid;
