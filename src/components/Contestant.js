import React, { useState } from "react";
import ScoreChangeButton from "./ScoreChangeButton";

function Contesant({ name }) {
  const [points, setPoints] = useState(0);

  const updatePoints = (value) => {
    setPoints(points + value);
  };


  return (
    <div className="flex">
        <div className="flex flex-col justify-center items-center w-1/2">
            <ScoreChangeButton onClick={updatePoints} value={100} />
            <ScoreChangeButton onClick={updatePoints} value={200} />
            <ScoreChangeButton onClick={updatePoints} value={300} />
            <ScoreChangeButton onClick={updatePoints} value={400} />
            <ScoreChangeButton onClick={updatePoints} value={500} />
        </div>
        
      <div className="flex justify-center items-center w-1/2">
        <div className="p-4 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-lg font-bold mb-2">{points}</h2>
          <p className="text-gray-700 font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Contesant;

