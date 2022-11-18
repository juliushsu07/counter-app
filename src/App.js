import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Counters></Counters>
      </main>
    </div>
  );
}

export default App;
