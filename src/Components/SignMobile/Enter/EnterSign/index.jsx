import React from "react";
import './entersign.css';
import { FaFacebookF } from "react-icons/fa";

const EnterSign = ({enter, setForm}) => {
    return(
        <div className={enter===true ? "entersignup" : "entersigndown"}>
            <div className={enter===true ? "entersign-darkyellowup" : "entersign-darkyellow"}></div>
            <div className="entersign-yellow"></div>
            <section className="entersign-buttons">
                <button className="entersign-buttons-botones boton-signup" onClick={() => setForm(1)}>
                    SIGN UP
                </button>
                <div className="entersign-buttons-div">
                    <p>Have an account?</p>
                    <button className="entersign-buttons-botones boton-signin" onClick={() => setForm(2)}>
                        SIGN IN
                    </button>
                </div>
                <button className="entersign-buttons-botones boton-facebook">
                <FaFacebookF />SIGN IN WITH FACEBOOK
                </button>
            </section>
        </div>
    )
}

export default EnterSign;