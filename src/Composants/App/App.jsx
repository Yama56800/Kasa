import React from "react";
import './App.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main>
        <Banner/>
        <Cards/>
      </Main>
    </div>
  );
}

export default App;
