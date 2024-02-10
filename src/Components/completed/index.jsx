import React from "react";
import './completed.css';
import tilde from '../../assets/caja-tilde.svg';

const Completed = ({handleStep, setValuesin, valuesup, dic}) => {
    return(
        <div className="completed">
            <div className="completed-cartel">
                <p>{dic.completed.registration}</p>
                <img src={tilde} alt="Caja" />
                <button onClick={() => {
                    handleStep()
                    setValuesin(
                        {
                            email: {
                                value: valuesup.email.value
                            },
                            password: {
                                value: valuesup.password.value
                            }
                        }
                    )
                    }}>
                    {dic.completed.sign}
                </button>
            </div>
        </div>
    )
}

export default Completed;