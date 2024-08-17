import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Projects } from './components/Project'; 
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
