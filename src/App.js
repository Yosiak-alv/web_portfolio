import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Education } from './components/Education.js';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Education/>
        <Footer/>
    </div>
  );
}

export default App;
