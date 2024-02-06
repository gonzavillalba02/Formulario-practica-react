import React from "react";
import './completed.css';
import completado from '../../../assets/caja-tilde.svg';

const Completed = ({setForm, handleCompleted}) => {
    return(
        <button className="completed-dom" 
        onClick={() => {
            setForm(2)
            handleCompleted()
            }}>
            <img src={completado} alt="Completado" />
        </button>
    )
}

export default Completed;