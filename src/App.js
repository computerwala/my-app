
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {

const [mode, setmode] = useState("light");

const toggleMode =()=> {
  if (mode === 'light') {
      setmode('dark') ;
      document.body.style.backgroundColor = 'grey';

  } else {
    setmode('light');
    document.body.style.backgroundColor = 'white';

  }
}


  return (
<>
    <Navbar title="RandomText" aboutText = "About" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar title="RandomText" aboutText = "about" mode={mode} /> */}
    <div className='container my-3'>  
      <TextForm heading = "This is a textbox"  mode={mode} /> 
      {/* <About /> */}
    </div>

</>
  );
}

export default App;
