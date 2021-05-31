import React from 'react';
import "./styles/global.css";
import "./styles/app.css";

import Header from "./components/header.js";
import Card from './components/card.js';


function App() {
  return (
    <div className="Wrapper" >
      <Header />
      <Card />
    </div> 
  );
}

export default App;
