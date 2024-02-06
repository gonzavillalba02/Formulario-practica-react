import React from "react";
import './signs.css';
import { FaArrowCircleLeft } from "react-icons/fa";
import Logo from '../../../assets/Icono.png'
import Textfield from "../../Textfield/textfield";
import Alert from "../Alert";
import Completed from "../Completed";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Signs = ({values, updateValues, labels, send, boton1, boton2, setForm, numero, setEnter, alert, completed, handleAlert, handleCompleted, blanco}) => {
    return(
        <div className="signsdom">
            <div className="signsdom_todo">
                <button className="sign__btn__img" 
                    onClick={() => {
                    setForm(0)
                    setEnter(true)
                    }}>
                    <FaArrowCircleLeft className="sign__icono"/>
                </button>
                <img src={Logo} alt="Logo" className="sign__img"/>
                <form className="sign__form">
                    {labels.map((label) => {
                        return <Textfield
                                key={label.label}
                                input = {label.input}
                                label = {label.label} 
                                type={label.type}
                                error = {label.valid}
                                updateValues={updateValues}
                                valor= {label.value}
                                values={values}
                                height='1vh'
                                fontSize='10vw'
                                />
                    })}
                </form>
                <div className="sign__botones">
                    <div>
                        <button className={"sign__botones-info" + " " + blanco} onClick={() => handleAlert()}>
                            <AiOutlineInfoCircle className="sign__icono-info"/>
                        </button>
                        <button className="sign__botones-primero" onClick={send}>
                            {boton1}
                        </button>
                    </div>
                    <button className="sign__botones-segundo" onClick={() => setForm(parseInt(numero))}>
                        {boton2}       
                    </button>
                </div>
            </div>
            {alert && <Alert handleAlert={handleAlert}/>}
            {completed && <Completed setForm={setForm} handleCompleted={handleCompleted}/>}
        </div>
    )
}

export default Signs;