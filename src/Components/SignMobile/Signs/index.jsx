import React from "react";
import './signs.css';
import { FaArrowCircleLeft } from "react-icons/fa";
import Logo from '../../../assets/Icono.png'
import Textfield from "../../Textfield/textfield";

const Signs = ({values, updateValues, labels, send, boton1, boton2, setForm, numero}) => {
    return(
        <div className="signsdom">
            <button className="sign__btn__img" onClick={() => setForm(0)}>
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
                <button className="sign__botones-primero" onClick={send}>
                    {boton1}
                </button>
                <button className="sign__botones-segundo" onClick={() => setForm(parseInt(numero))}>
                    {boton2}       
                </button>
            </div>
        </div>
    )
}

export default Signs;