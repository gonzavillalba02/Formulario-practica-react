import React from "react";
import './entersign.css';
import { FaFacebookF } from "react-icons/fa";

const EnterSign = ({enter, setForm, dic}) => {
    return(
        <div className={enter===true ? "entersignup" : "entersigndown"}>
            <div className={enter===true ? "entersign-darkyellowup" : "entersign-darkyellow"}></div>
            <div className="entersign-yellow"></div>
            <section className="entersign-buttons">
                <button className="entersign-buttons-botones boton-signup" onClick={() => setForm(1)}>
                    {String(dic.sign.signup).toUpperCase()}
                </button>
                <div className="entersign-buttons-div">
                    <p>{dic.mobile.haveu}</p>
                    <button className="entersign-buttons-botones boton-signin" onClick={() => setForm(2)}>
                    {String(dic.sign.singin).toUpperCase()}
                    </button>
                </div>
                <button className="entersign-buttons-botones boton-facebook">
                <FaFacebookF />{String(dic.sign.facebookin).toUpperCase()}
                </button>
            </section>
        </div>
    )
}

export default EnterSign;