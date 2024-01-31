import React, {useState} from "react";
import './sign.css';
import Signin from "../Sign in/singin";
import { AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import imagenIN from '../../assets/black-console.svg';
import imagenUP from '../../assets/white-console.svg';
import Alerta from "../Alerta";
import Completed from "../completed";
import { validName, validEmail, validPassword } from "./validacionesup";

const Sign = () => {

    const [step, setStep] = useState(true)

    const [alert, setAlert] = useState(false)

    const [completed, setCompleted] = useState(false)

    const handleStep = () => {
        setStep(!step)
    }

    const handleAlert = () => {
        setAlert(!alert)
    }

    const handleCompleted = () => {
        setCompleted(!completed)
    }
    
    const [valuesup, setValuesup] = useState(
            {
                firstName: {
                    value: "",
                    valid: ""
                },
                lastName: {
                    value: "",
                    valid: ""
                },
                email: {
                    value: "",
                    valid: ""
                },
                password: {
                    value: "",
                    valid: ""
                }
            }
    )

    const [valuesin, setValuesin] = useState(
        {
            email: {
                value: ""
            },
            password: {
                value: ""
            }
        }
    )

    const labels_up = [
        {
            label: 'FIRST NAME',
            type: '',
            input: 'firstName',
            value: valuesup.firstName.value,
            valid: valuesup.firstName.valid
        },
        {
            label: 'LAST NAME',
            type: '',
            input: 'lastName',
            value: valuesup.lastName.value,
            valid: valuesup.lastName.valid
            
        },
        {
            label: 'E-MAIL',
            type: '',
            input: 'email',
            value: valuesup.email.value,
            valid: valuesup.email.valid
        },
        {
            label: 'PASSWORD',
            type: 'password',
            input: 'password',
            value: valuesup.password.value,
            valid: valuesup.password.valid
        },
    ]

    const labels_in = [
        {
            label: 'E-MAIL',
            type: '',
            input: 'E-MAIL',
            valid: true
        },
        {
            label: 'PASSWORD',
            type: 'password',
            input: 'PASSWORD',
            valid: true
        },
    ]

    const sendup = () => {
        if (validName(valuesup.firstName.value) && validName(valuesup.lastName.value) && validEmail(valuesup.email.value) && validPassword(valuesup.password.value)){
            handleCompleted()
        }else{
            if (validName(valuesup.firstName.value) === false && valuesup.firstName.valid != ""){
                updateValues("firstName", valuesup.firstName.value, false)
            }

            if (validName(valuesup.lastName.value) === false && valuesup.lastName.valid != ""){
                updateValues("lastName", valuesup.lastName.value, false)
            }

            if (validEmail(valuesup.email.value) === false && valuesup.email.valid != ""){
                updateValues("email", valuesup.email.value, false)
            }

            if (validPassword(valuesup.password.value) === false && valuesup.password.valid != ""){
                updateValues("password", valuesup.password.value, false)
            }
            
            handleAlert(!alert)
        }
    }

    const sendin = () => {
        console.log(valuesin)
    }

    const updateValuesin = (input, value, valid) => {
        setValuesin(
            {
                email: {
                    value: input === 'E-MAIL' ? value : valuesin.email.value
                },
                password: {
                    value: input === 'PASSWORD' ? value : valuesin.email.value
                }
            }
        )
    }

    const updateValues = (input, value, valid) => {
        setValuesup(
            {
                firstName: {
                    value: input === 'firstName' ? value : valuesup.firstName.value,
                    valid: input === 'firstName' ? valid : valuesup.firstName.valid
                },
                lastName: {
                    value: input === 'lastName' ? value : valuesup.lastName.value,
                    valid: input === 'lastName' ? valid : valuesup.lastName.valid
                },
                email: {
                    value: input === 'email' ? value : valuesup.email.value,
                    valid: input === 'email' ? valid : valuesup.email.valid
                },
                password: {
                    value: input === 'password' ? value : valuesup.password.value,
                    valid: input === 'password' ? valid : valuesup.password.valid
                }
            }
        )
    }

    return(
        <>
            {step === true ? 
                <>
                <Signin /*Sign up*/
                labels = {labels_up}
                boton = 'Sing up'
                logo = {<AiOutlineUser />}
                header = 'CREATE AN ACCOUNT'
                imagen = {<img src={imagenIN} alt="Console image" />}
                handleStep = {handleStep}
                clase = 'sign-container-from-singin'
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
                    <Completed 
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
                clase = 'sign-container-from-singup'
                funcion_boton = {sendin}
                valuesup = {valuesin}
                updateValues = {updateValuesin}
                handleCompleted = {handleCompleted}
                />
            }
        </>
    )
}

export default Sign;