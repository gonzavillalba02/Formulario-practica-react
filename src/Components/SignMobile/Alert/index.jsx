import React from "react";
import './alert.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import robot from '../../../assets/robot.svg';

const Alert = ({handleAlert, dic}) => {
    return(
        <div className="alert">
            <div className="alert-dom">
                <button className="alert__return" onClick={() => handleAlert()}>
                    <RxCrossCircled />
                </button>
                <img src={robot} alt="Robot" className="alert__robot"/>
                <div className="alert_rules">
                    <p>
                        {dic.alert.please}
                    </p>
                    <ul>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>{dic.alert.rule1}</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>{dic.alert.rule2}</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alert__rules-icono"/> <p>{dic.alert.rule3}</p></li>
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