import React, {useState} from "react";
import './sign.css';
import Signin from "../Sign in/singin";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import imagenIN from '../../assets/black-console.svg';
import imagenUP from '../../assets/white-console.svg';
import Alerta from "../Alerta";

const Sign = () => {

    const [step, setStep] = useState(true)

    const [alert, setAlert] = useState(true)

    const handleStep = () => {
        setStep(!step)
    }

    const handleAlert = () => {
        setAlert(!alert)
    }

    const labels_in = [
        {
            label: 'FIRST NAME',
            type: ''
        },
        {
            label: 'LAST NAME',
            type: ''
        },
        {
            label: 'E-MAIL',
            type: ''
        },
        {
            label: 'PASSWORD',
            type: 'password'
        },
    ]

    const labels_up = [
        {
            label: 'E-MAIL',
            type: ''
        },
        {
            label: 'PASSWORD',
            type: 'password'
        },
    ]

    return(
        <>
            {step === true ? 
                <>
                <Signin /*Sign up*/
                labels = {labels_in}
                boton = 'Sing up'
                logo = {<AiOutlineUser />}
                header = 'CREATE AN ACCOUNT'
                imagen = {<img src={imagenIN} alt="Console image" />}
                handleStep = {handleStep}
                clase = 'sign-container-from-singin'
                funcion_boton = {handleAlert}
                /> 
                {alert === false ?
                    <></>
                :
                    <Alerta handleAlert={handleAlert}/>
                }
                </>
            : 
                <Signin /*Sign in*/
                labels = {labels_up}
                boton = 'Sign in'
                logo = {<FaPlus className="faplus"/>}
                header = 'ALREADY MEMBERS'
                imagen = {<img src={imagenUP} alt="Console image" className="img-white"/>}
                handleStep = {handleStep}
                clase = 'sign-container-from-singup'
                />
            }
        </>
    )
}

export default Sign;