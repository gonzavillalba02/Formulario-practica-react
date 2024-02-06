import React, { useState } from "react";
import './enter.css';
import EnterSign from "./EnterSign";
import { IoEnterOutline, IoHome } from "react-icons/io5";
import pantalla from '../../../assets/black-console.svg';
import logo from '../../../assets/Icono.png';

const Enter = ({setForm, enter, setEnter}) => {

    const handleEnter = () => {
        setEnter(!enter)
    }

    return(
        <div className="enter">  
            <button className="enter-icono-boton" onClick={() => handleEnter()}>
                {enter === false ? 
                <IoEnterOutline className="enter-icono"/>
                :
                <IoHome className="enter-icono" />}
            </button>
            <img src={pantalla} alt="Black console" className="enter-console"/>
            <img src={logo} alt="Logo" className="enter-icono-img" />
            <button className="enter-button" onClick={() => handleEnter()}>
                ENTER
            </button>
            <EnterSign enter={enter} setForm={setForm}/>
        </div>
    )
}

export default Enter;