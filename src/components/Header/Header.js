import React from 'react';
import './Header.css';

const Header = props => (
   <div className="header text-center d-flex align-items-center justify-content-center">
     

      <div className="container d-flex flex-wrap justify-content-center">
                    
            <div className="move">
            S c o r e : {props.score}
            </div>
            <div className="push"> | </div>
            <div className="move">
            H i g h   S c o r e : {props.highScore}
            </div>
         
            <div id="colorChange" className={props.msgColor}>{props.alertMessage}</div>


        </div>
    </div>
);
export default Header;