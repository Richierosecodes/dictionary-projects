import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src ={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
          <Dictionary />
        </main>
      <footer className="App-footer"> Coded by <a href="www.linkedin.com/in/roseakintobi">Rose Akintobi</a> open-sourced on <a href="https://github.com/Richierosecodes">Github</a> and hosted on <a href="https://app.netlify.com/teams/richierosecodes/sites">Netlify</a></footer>
      
    </div>
  );
}

export default App;
