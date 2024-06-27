import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://github.com/tarynmitchell"> Taryn Mitchell</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
