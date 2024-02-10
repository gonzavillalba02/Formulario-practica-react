import React, {useState} from "react";
import './sign.css';
import Signin from "../Sign in/singin";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import imagenIN from '../../assets/black-console.svg';
import imagenUP from '../../assets/white-console.svg';
import Alerta from "../Alerta";
import Completed from "../completed";

const Sign = ({valuesup, updateValues, labels_up, valuesin, setValuesin, updateValuesin, labels_in, sendup, sendin, alert, handleAlert, completed, handleCompleted, step, handleStep, dic, handleDic}) => {

    return(
        <div className="sign">
            {step === true ? 
                <>
                <Signin /*Sign up*/
                labels = {labels_up}
                boton = {dic.sign.signup}
                boton2 = {dic.sign.singin}
                logo = {<AiOutlineUser />}
                header = {dic.sign.create}
                imagen = {<img src={imagenIN} alt="Console image" />}
                handleStep = {handleStep}
                clase = 'sign-container-from-singup'
                funcion_boton = {sendup}
                valuesup = {valuesup}
                updateValues = {updateValues}
                handleCompleted = {handleCompleted}
                dic = {dic}
                handleDic={handleDic}
                /> 
                {alert === false ?
                    <></>
                :
                    <Alerta
                    handleAlert={handleAlert}
                    dic = {dic}/>
                }
                {completed === false ?
                    <></>
                :
                    <Completed 
                    setValuesin={setValuesin} 
                    valuesup={valuesup} 
                    dic = {dic}
                    handleStep= {handleStep}/>
                }
                </>
            : 
                <Signin /*Sign in*/
                labels = {labels_in}
                boton = {dic.sign.singin}
                boton2 = {dic.sign.signup}
                logo = {<FaPlus className="faplus"/>}
                header = {dic.sign.already}
                imagen = {<img src={imagenUP} alt="Console image" className="img-white"/>}
                handleStep = {handleStep}
                clase = 'sign-container-from-singin'
                funcion_boton = {sendin}
                valuesup = {valuesin}
                updateValues = {updateValuesin}
                handleCompleted = {handleCompleted}
                dic = {dic}
                handleDic={handleDic}
                />
            }
        </div>
    )
}

export default Sign;