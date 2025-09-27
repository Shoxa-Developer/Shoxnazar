import About from "./components/about";
import Main from "./components/main";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Main />
      <About />
    </div>
  );
};

export default App;