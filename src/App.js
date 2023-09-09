import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componants/navbar/Navbar";
import QrView from "./componants/QrView/QrView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <QrView />
    </div>
  );
}

export default App;
