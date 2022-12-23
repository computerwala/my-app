
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
<>
    <Navbar title="RandomText" aboutText = "about" />
    <div className='container my-3'>
       
       {/* <TextForm heading = "This is a textbox" />  */}


      <About />
    </div>

</>
  );
}

export default App;
