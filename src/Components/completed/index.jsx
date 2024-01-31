import React from "react";
import './completed.css';
import tilde from '../../assets/caja-tilde.svg';

const Completed = ({handleStep}) => {
    return(
        <div className="completed">
            <div className="completed-cartel">
                <p>Registration completed !</p>
                <img src={tilde} alt="Caja" />
                <button onClick={() => handleStep()}>
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Completed;