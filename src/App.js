import Dictionary from './Dictionary.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="nurture"/>
        </main>
      </div>
    </div>
  );
}

export default App;
