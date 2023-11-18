import React from "react";
import './Logement.css';
import Navbar from '../../Composants/Navbar/Navbar';

import Main from '../../Composants/Main/Main';
import Footer from '../../Composants/Footer/Footer';
import Carousel from '../../Composants/Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main>
       <div className="container">
      <div className="header-container"></div>
      <div className="profil"></div>
      <div className="tags"></div>
      <div className="rating"></div>
      <div className="appartement-content">
          <div className="card">
                <div className="header-card">
                  <h3 className="title-card">Description</h3>
                  <button className="btn-card"><img s alt="" /></button>
                </div>
                <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
          <div className="card">
                <div className="header-card">
                  <h3 className="title-card">Equipements</h3>
                  <button className="btn-card"><img s alt="" /></button>
                </div>
                <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
      </div>
      
       </div>
        
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
