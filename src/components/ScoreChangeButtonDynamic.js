import { useState } from "react";

function ScoreChangeButtonDynamic({onClick}) {
    const [customPoints, setCustomPoints] = useState(0);

    const handleChange = (event) => {
        const amount = parseInt(event.target.value);
        setCustomPoints(amount);
      };

    return (
      <div className="my-2 p-2 bg-white rounded-lg shadow-lg flex justify-between items-center text-lg">
            <button
              className="text-gray-700 hover:text-gray-900 text-3xl"
              onClick={() => {onClick(customPoints * -1)}}
            >
              -
            </button>
            <span className="text-gray-700 font-bold">
                <input type="number" min="0" placeholder="amount..." className="w-24 h-12 text-center" onChange={handleChange}/>
            </span>
            <button
              className="text-gray-700 hover:text-gray-900 text-3xl"
              onClick={() => {onClick(customPoints)}}
            >
              +
            </button>
          </div>
    );
  }
  
  export default ScoreChangeButtonDynamic;