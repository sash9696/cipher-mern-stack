
import './App.css';
import Experience from './components/Experience/Experience';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';


function App() {

//Portfolio website

// 1.Navbar
//2. HomePage
//3. Tech Stack
//4. Experience
//5. Projects
  return (
    <div className='app'>
      
        <Navbar/>
        <HomePage/>
        <TechStack/>
        <Experience/>
        <Projects/>


    </div>
  )
}

export default App
