import React, { useState } from "react";
import ScoreChangeButton from "./ScoreChangeButton";
import ScoreChangeButtonDynamic from "./ScoreChangeButtonDynamic";

function Contesant({ onUpdate }) {
  const [points, setPoints] = useState(0);
  const [name, setName] = useState("Isabella");

  const updatePoints = (value) => {
    setPoints(points + value);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mb-6">
        <div className="py-4 text-xl text-gray-700 bg-white rounded-lg shadow-lg text-center">
          {/* <h2 className="text-gray-700 font-sacramento text-4xl">{name}</h2> */}
          <input type="text" className="font-sacramento text-5xl text-center" placeholder="Name" onChange={() => {onUpdate=(handleChange)}}/>
          <h2 className="font-semibold mb-2 text-3xl">{points}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
          <ScoreChangeButton onClick={updatePoints} value={200} />
          <ScoreChangeButton onClick={updatePoints} value={400} />
          <ScoreChangeButton onClick={updatePoints} value={600} />
          <ScoreChangeButton onClick={updatePoints} value={800} />
          <ScoreChangeButton onClick={updatePoints} value={1000} />
          <ScoreChangeButtonDynamic onClick={updatePoints} />
      </div>
    </div>
  );
}

export default Contesant;

