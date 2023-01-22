import './App.css';
import Landing from './components/Landing'
import Nav from './components/nav'
import Highlights from './components/Highlights';
import Featured from './components/Features';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
      <Explore></Explore>
      <Footer></Footer>
    </div>
  );
}

export default App;
