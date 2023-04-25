import React, { useState } from "react";
import ScoreChangeButton from "./ScoreChangeButton";

function Contesant({ name }) {
  const [points, setPoints] = useState(0);

  const updatePoints = (value) => {
    setPoints(points + value);
  };


  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mb-6">
        <div className="py-4 px-12 text-xl bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-gray-700 font-sacramento text-4xl">{name}</h2>
          <h2 className="font-bold mb-2">{points}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
          <ScoreChangeButton onClick={updatePoints} value={100} />
          <ScoreChangeButton onClick={updatePoints} value={200} />
          <ScoreChangeButton onClick={updatePoints} value={300} />
          <ScoreChangeButton onClick={updatePoints} value={400} />
          <ScoreChangeButton onClick={updatePoints} value={500} />
      </div>
    </div>
  );
}

export default Contesant;

