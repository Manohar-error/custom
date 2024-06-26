import React from 'react';
import './App.css';

import Page from './components/Page/Page';

// import Page2 from './components/Page/HorizantalStepper';



function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {/* <Page2 /> */}
      <Page />
      
    </div>
  );
}

export default App;