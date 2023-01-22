import './App.css';
import Nav from './components/nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './pages/Home';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Router />
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
