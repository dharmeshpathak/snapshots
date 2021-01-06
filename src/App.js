import './App.css';
import SeachBox from "./SearchBox";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title" style = {{color:"blue"}}>Snapshots</h1>
        <SeachBox />
      </div>
    </div>
  );
}

export default App;
