import React from "react";
import './Error.css';
import Navbar from '../../Composants/Navbar/Navbar';
import Footer from '../../Composants/Footer/Footer';



function Error() {
  return (
    <div className="error">
      <Navbar/>
      
      <div className="number">404</div>
      <div className="message"> Oups! La page que vous demandez n'existe pas.</div>
      <div className="back-home"><a href="">Retourner sur la page d'acceuil</a></div>
        
      <Footer />
    </div>
  );
}

export default Error;