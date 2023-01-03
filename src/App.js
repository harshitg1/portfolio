import Card from './components/Card';
import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import Skill from './components/Skill';
import ContactMe from './components/Contact';

function App() {
  return (
    
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <Card/>
      <About/>
      <Skill/>
      <ContactMe/>
      <Footer/>
     
    </div>
    
  );
}

export default App;
