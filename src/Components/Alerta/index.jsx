import React from "react";
import './index.css';
import robot from '../../assets/robot.svg';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Alerta = ({handleAlert}) => {
    return(
        <div className="alerta">
            <div className="alerta-cartel">
                <img src={robot} alt="Robot" className="alerta-cartel-robot"/>
                <div className="alerta-cartel-reglas">
                    <p>
                        Please follow the rules below :
                    </p>
                    <ul>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> The First and the Last name must contain at least 2 characters</li>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> Enter a valid email. Must contain '@'</li>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> The password must contain at least 1 capital letter and 1 special character (# _ - $ @)</li>
                    </ul>
                </div>
                <button onClick={handleAlert}>
                    Accept
                </button>
            </div>
        </div>
    )
}

export default Alerta;