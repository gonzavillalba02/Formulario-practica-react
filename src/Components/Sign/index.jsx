import React, {useState} from "react";
import './sign.css';
import Signin from "../Sign in/singin";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import imagenIN from '../../assets/black-console.svg';
import imagenUP from '../../assets/white-console.svg';
import Alerta from "../Alerta";
import Completed from "../completed";

const Sign = ({valuesup, updateValues, labels_up, valuesin, setValuesin, updateValuesin, labels_in, sendup, sendin, alert, handleAlert, completed, handleCompleted}) => {

    const [step, setStep] = useState(true)

    const handleStep = () => {
        setStep(!step)
    }

    return(
        <div className="sign">
            {step === true ? 
                <>
                <Signin /*Sign up*/
                labels = {labels_up}
                boton = 'Sing up'
                logo = {<AiOutlineUser />}
                header = 'CREATE AN ACCOUNT'
                imagen = {<img src={imagenIN} alt="Console image" />}
                handleStep = {handleStep}
                clase = 'sign-container-from-singup'
                funcion_boton = {sendup}
                valuesup = {valuesup}
                updateValues = {updateValues}
                handleCompleted = {handleCompleted}
                /> 
                {alert === false ?
                    <></>
                :
                    <Alerta
                    handleAlert={handleAlert}/>
                }
                {completed === false ?
                    <></>
                :
                    <Completed setValuesin={setValuesin} valuesup={valuesup}
                    handleStep= {handleStep}/>
                }
                </>
            : 
                <Signin /*Sign in*/
                labels = {labels_in}
                boton = 'Sign in'
                logo = {<FaPlus className="faplus"/>}
                header = 'ALREADY MEMBERS'
                imagen = {<img src={imagenUP} alt="Console image" className="img-white"/>}
                handleStep = {handleStep}
                clase = 'sign-container-from-singin'
                funcion_boton = {sendin}
                valuesup = {valuesin}
                updateValues = {updateValuesin}
                handleCompleted = {handleCompleted}
                />
            }
        </div>
    )
}

export default Sign;