import React, { useState } from "react";
import './SignMobile.css';
import Enter from "./Enter";
import Signs from "./Signs";

const SignMobile = ({valuesup, updateValues, labels_up, valuesin, setValuesin, updateValuesin, labels_in, sendup, sendin, alert, completed, handleAlert, handleCompleted, dic, handleDic}) => {
    
    const [form, setForm] = useState(0);

    const[enter, setEnter] = useState(false)

    return(
        <div className="signmobile">
            {form === 0 && 
            <Enter 
            setForm={setForm}
            enter={enter}
            setEnter={setEnter}
            dic = {dic}
            handleDic={handleDic}
            />}
            {form === 1 && 
            /*Sign up*/
            <Signs 
            values={valuesup}
            updateValues={updateValues}
            labels={labels_up}
            send={sendup}
            boton1 = {String(dic.sign.signup).toUpperCase()}
            boton2 = {String(dic.sign.singin).toUpperCase()}
            setForm={setForm}
            numero = '2'
            setEnter={setEnter}
            alert={alert}
            completed={completed}
            handleAlert={handleAlert}
            handleCompleted={handleCompleted}
            dic = {dic}
            />}
            {form === 2 && 
            /*Sign in*/
            <Signs
            values={valuesin}
            updateValues={updateValuesin}
            labels={labels_in}
            send={sendin}
            boton1 = {String(dic.sign.singin).toUpperCase()}
            boton2 = {String(dic.sign.signup).toUpperCase()}
            setForm={setForm}
            numero = '1'
            setEnter={setEnter}
            blanco = "blanco"
            dic = {dic}
            />}
        </div>
    )

}

export default SignMobile;