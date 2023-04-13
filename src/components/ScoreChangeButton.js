function ScoreChangeButton({onClick, value}) {
  return (
    <div className="my-2 p-2 bg-white rounded-lg shadow-lg flex justify-between items-center">
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={() => {onClick(value * -1)}}
          >
            -
          </button>
          <span className="mx-4 text-gray-700 font-bold">{value}</span>
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={() => {onClick(value)}}
          >
            +
          </button>
        </div>
  );
}

export default ScoreChangeButton;