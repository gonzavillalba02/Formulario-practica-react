import React from "react";
import './Singin.css'
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import Textfield from "../Textfield/textfield";

const Signin = ({labels, boton, logo, header, imagen, handleStep}) => {

    return(
        <div className="sign-container">
            <div className="sign-container-yellow"></div>
            <div className="sign-container-form">
                <div className="sign-container-form-back">
                    <IoIosArrowBack className="sign-container-form-back-arrow"/>
                    <button>Back</button>
                </div>
                <div className="sign-container-form-white">
                    <div className="sign-container-form-white-header">
                        <p>{header}</p>
                        <div className="sign-container-form-white-header-sign">
                            {logo}
                            <button
                            onClick={handleStep}
                            >
                                {boton == 'Sign in' ? 'Sign up' : 'Sign in'}
                            </button>
                        </div>
                    </div>
                    <div className="sign-container-form-white-allform">
                        <form className="sign-container-form-white-form">

                            {labels.map((label) => {
                                return <Textfield label = {label.label} type={label.type}/>
                            })}

                        </form>

                        <button className="sign-container-form-whit-button">
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