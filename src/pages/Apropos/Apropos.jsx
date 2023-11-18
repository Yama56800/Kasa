import React from "react";
import './Apropos.css';
import Navbar from '../../Composants/Navbar/Navbar';
import Banner from '../../Composants/Banner/Banner';

import Main from '../../Composants/Main/Main';
import Footer from '../../Composants/Footer/Footer';


function Apropos() {
  return (
    <div className="App">
      <Navbar/>
      <Main>
      <Banner />
       <div className="menu">
          <div className="card">
                <div className="header-card">
                  <h3 className="title-card">Flabilité</h3>
                  <button className="btn-card"><img s alt="" /></button>
                </div>
                <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
          <div className="card">
                <div className="header-card">
                  <h3 className="title-card">Respect</h3>
                  <button className="btn-card"></button>
                </div>
                <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
          <div className="card">
                <div className="header-card">
                  <h3 className="title-card">Service</h3>
                  <button className="btn-card"></button>
                </div>
                <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
          <div className="card">
              <div className="header-card">
                  <h3 className="title-card">Sécurité</h3>
                  <button className="btn-card"></button>
              </div>
              <div className="card-content">aaaaaaaaaaaaaaaaaaaa</div>
          </div>
       </div>
    
        
      </Main>
      <Footer />
    </div>
  );
}

export default Apropos;
