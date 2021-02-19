import "./App.css";
import Home from "./Main-Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./Components/NavbarMain";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Home />
    </div>
  );
}

export default App;
