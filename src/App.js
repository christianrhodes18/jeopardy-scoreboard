import Contesant from "./components/Contestant";
import logo from "./img/jewpardy_logo.jpg";

function App() {


  return (
    <div className="bg-gray-100 h-screen">
      <nav className="flex justify-center p-6">
        <img src={logo} alt="logo" width={500} />
        {/* <h1 className=" font-jeopardy text-[5rem] my-4">Jewpardy</h1> */}
      </nav>
      <main className="flex flex-row justify-evenly">
        <Contesant name="Charlie" />
        <Contesant name="Edgerton" />
        <Contesant name="Willow" />
      </main>
    </div>
  );
}

export default App;

