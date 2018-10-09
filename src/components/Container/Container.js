import React from 'react';
import './Container.css';
import SpookyBois from '../SpookyBois';


const Container = props => (
  // loops through each character to be displayed in the DOM 
  <div className='container d-flex flex-wrap justify-content-center'>


    {props.spookyBois.map((a, b) => <SpookyBois name={a} key={b} clickEvent={props.clickEvent} />)}

    
  </div>
);

export default Container;