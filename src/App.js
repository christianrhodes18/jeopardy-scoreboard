import { useState } from "react";
import Contesant from "./components/Contestant";
import logo from "./img/jewpardy_logo.jpg";

function App() {

  // const resetScores = () => {
  //   console.log("Resetting Scores");
  // };

  const [name, setName] = useState("Isabella");
  const [doubleJeopardy, setDoubleJeopardy] = useState(false);

  const toggleDoubleJeopardy = () => {
    setDoubleJeopardy(!doubleJeopardy);
  };

  const updateNames = () => {
    setName(name);
  };

  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </head>

      <div className="bg-gray-100 h-screen">
        <nav className="flex justify-center p-6">
          {/* <img src={logo} alt="logo" width={500} /> */}
        </nav>
        <main className="flex flex-row justify-evenly">
          <Contesant onUpdate={updateNames} doubleJeopardyMode={doubleJeopardy} />
          <Contesant onUpdate={updateNames} doubleJeopardyMode={doubleJeopardy} />
          <Contesant onUpdate={updateNames} doubleJeopardyMode={doubleJeopardy} />
        </main>
        <div className="flex justify-center">
          <button className="py-4 px-12 mt-12 text-xl bg-white rounded-lg shadow-lg text-center" onClick={toggleDoubleJeopardy}>
            {doubleJeopardy ? <span className="text-green-500">Double Jeopardy On</span> : <span className="text-red-500">Double Jeopardy Off</span>}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

