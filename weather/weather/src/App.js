import logo from './logo.svg';
import './App.css';

function App() {

  const api={
    key:"37ba30a364b6f298c7a1292dfbacd5c7",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div className="app">
    <main>
      <div className="search-box">
      <input
      type="text"
      className="search-bar"
      placeholder="Search..."


      />
      </div>
    </main>
      
    </div>
  );
}

export default App;
