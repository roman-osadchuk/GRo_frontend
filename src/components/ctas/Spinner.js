import React from "react"
import spinner from '../../images/Animation/Spinner.gif'
import loading_spinner from '../../images/Animation/loading_spinner.gif'
import './style.css'


const Spinner = () => (
  <div className="spinner__container" >
    <img src={spinner} />
  </div>
);


export default Spinner;
