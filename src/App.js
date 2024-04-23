import "./App.scss";
import FloatingAction from "./components/FloatingAction/FloatingAction";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <div className="navbar">
        <span>THE PRODUCT PLATFORM</span>
      </div>
      <FloatingAction />
    </div>
  );
}

export default App;
