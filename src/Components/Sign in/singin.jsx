import React from "react";
import './Singin.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import Textfield from "../Textfield/textfield";

const Signin = ({labels, boton, logo, header, imagen, handleStep, clase, funcion_boton, updateValues, valuesup, handleCompleted}) => {

    return(
        <div className="sign-container">
            <div className="sign-container-yellow"></div>
            <div className={"sign-container-form" + " " + clase}>
                <div className="sign-container-form-back">
                    <IoIosArrowBack className="sign-container-form-back-arrow"/>
                    <button>Back</button>
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
                                {boton == 'Sign in' ? 'Sign up' : 'Sign in'}
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
                            <FaFacebookF />
                            {boton.toUpperCase()} WITH FACEBOOK
                        </button>
                        <p>
                            By signing up you agree <br/> Terms & Conditions and Quality Policy
                        </p>
                </div>
            </div>
            {imagen}
        </div>
    )
}

export default Signin