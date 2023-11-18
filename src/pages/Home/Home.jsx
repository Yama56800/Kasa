import React from "react";
import './Home.css';
import Navbar from '../../Composants/Navbar/Navbar';
import Banner from '../../Composants/Banner/Banner';
import Cards from '../../Composants/Cards/Cards';
import Main from '../../Composants/Main/Main';
import Grid from '../../Composants/Grid/Grid';
import Footer from '../../Composants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main>
        <Banner/>
        <Grid/>
      
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
