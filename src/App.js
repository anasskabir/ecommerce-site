import './App.css';
import Landing from './components/Landing'
import Nav from './components/nav'
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
    </div>
  );
}

export default App;
