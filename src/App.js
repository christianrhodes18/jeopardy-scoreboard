import Contesant from "./components/Contestant";
import logo from "./img/jewpardy_logo.jpg";

function App() {

  const resetScores = () => {
    console.log("Resetting Scores");
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
          <img src={logo} alt="logo" width={500} />
          {/* <h1 className=" font-jeopardy text-[5rem] my-4">Jewpardy</h1> */}
        </nav>
        <main className="flex flex-row justify-evenly">
          <Contesant name="Isabella" />
          <Contesant name="James" />
          <Contesant name="Jacob" />
        </main>
        {/* <div className="flex justify-center">
          <button className="py-4 px-12 mt-12 text-xl bg-white rounded-lg shadow-lg text-center" onClick={resetScores}>
            Reset Scores
          </button>
        </div> */}
      </div>
    </>
  );
}

export default App;

