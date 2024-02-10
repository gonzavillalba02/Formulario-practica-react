import React from "react";
import './Singin.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import Textfield from "../Textfield/textfield";

const Signin = ({labels, boton, boton2, logo, header, imagen, handleStep, clase, funcion_boton, updateValues, valuesup, handleCompleted, dic, handleDic}) => {

    return(
        <div className="sign-container">
            <div className="sign-container-yellow"></div>
            <select name="idioma" id="idioma" className="sign-container-select" onChange={(e) => handleDic(e)}>
                <option value="ingles">🇺🇸</option>
                <option value="español">🇪🇸</option>
                <option value="italiano">🇮🇹</option>
                <option value="frances">🇫🇷</option>
            </select>
            <div className={"sign-container-form" + " " + clase}>
                <div className="sign-container-form-back">
                    <IoIosArrowBack className="sign-container-form-back-arrow"/>
                    <button>{dic.sign.back}</button>
                </div>
                <div className='sign-container-form-white'>
                    <div className="sign-container-form-white-header">
                        <p>{header}</p>
                        <div className="sign-container-form-white-header-sign">
                            {logo}
                            <button
                            onClick={()=>{
                                handleStep()
                                handleCompleted()
                                }}
                            >
                                {boton2}
                            </button>
                        </div>
                    </div>
                    <div className="sign-container-form-white-allform">
                        <form className="sign-container-form-white-form">

                            {labels.map((label) => {
                                return <Textfield
                                        key={label.label}
                                        input = {label.input}
                                        label = {label.label} 
                                        type={label.type}
                                        error = {label.valid}
                                        updateValues={updateValues}
                                        valor= {label.value}
                                        valuesup={valuesup}
                                        height='2.4vh'
                                        fontSize='1.6vh'
                                        />
                            })}

                        </form>

                        <button className="sign-container-form-whit-button"
                        onClick={funcion_boton}>
                            {boton.toUpperCase()}
                        </button>
                    </div>
                </div>
                <div className="sign-container-form-facebook">
                        <button>
                            <FaFacebookF className="sign-container-form-facebook-icono"/>
                            {boton.toUpperCase() + " " +dic.sign.facebook}
                        </button>
                        <p>
                            {dic.sign.terms}
                        </p>
                </div>
            </div>
            {imagen}
        </div>
    )
}

export default Signin