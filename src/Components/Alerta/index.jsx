import React from "react";
import './index.css';
import robot from '../../assets/robot.svg';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Alerta = ({handleAlert, dic}) => {
    return(
        <div className="alerta">
            <div className="alerta-cartel">
                <img src={robot} alt="Robot" className="alerta-cartel-robot"/>
                <div className="alerta-cartel-reglas">
                    <p>
                        {dic.alert.please}
                    </p>
                    <ul>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> <p>{dic.alert.rule1}</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> <p>{dic.alert.rule2}</p></li>
                        <li><IoIosCheckmarkCircleOutline className="alerta-cartel-reglas-icono"/> <p>{dic.alert.rule3}</p></li>
                    </ul>
                </div>
                <button onClick={handleAlert}>
                    {dic.alert.accept}
                </button>
            </div>
        </div>
    )
}

export default Alerta;