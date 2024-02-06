import React from "react";
import './alert.css';
import { IoMdReturnLeft, IoIosCheckmarkCircleOutline } from "react-icons/io";
import robot from '../../../assets/robot.svg';

const Alert = ({handleAlert}) => {
    return(
        <div className="alert">
            <div className="alert-dom">
                <button className="alert__return" onClick={() => handleAlert()}>
                    <IoMdReturnLeft />
                </button>
                <img src={robot} alt="Robot" className="alert__robot"/>
                <div className="alert_rules">
                    <p>
                        Please follow the rules below:
                    </p>
                    <ul>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>The First and the Last name must contain at least 2 characters</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>Enter a valid email. Must contain '@'</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>The password must contain between 8 and 20 characters, 1 capital letter and 1 special character (# _ - $ @)</p></li>
                    </ul>
                </div>
            </div>
            <div className="alert__volver">
                <button className="alert__volver_boton" onClick={() => handleAlert()}></button>
            </div>
        </div>
    )
}

export default Alert;