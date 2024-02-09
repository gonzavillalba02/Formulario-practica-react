import { useState } from 'react';
import './App.css';
import Sign from './Components/Sign';
import SignMobile from './Components/SignMobile';
import { validName, validEmail, validPassword } from './validacionesup.js';

function App() {

  const [step, setStep] = useState(true)

  const handleStep = () => {
      setStep(!step)
  }

  const [alert, setAlert] = useState(false)

  const [completed, setCompleted] = useState(false)

  const handleAlert = () => {
    setAlert(!alert)
  }

  const handleCompleted = () => {
      setCompleted(!completed)
  }

  const [valuesup, setValuesup] = useState(
    {
        firstName: {
            value: "",
            valid: ""
        },
        lastName: {
            value: "",
            valid: ""
        },
        email: {
            value: "",
            valid: ""
        },
        password: {
            value: "",
            valid: ""
        }
    }
  )

  const updateValues = (input, value, valid) => {
    setValuesup(
        {
            firstName: {
                value: input === 'firstName' ? value : valuesup.firstName.value,
                valid: input === 'firstName' ? valid : valuesup.firstName.valid
            },
            lastName: {
                value: input === 'lastName' ? value : valuesup.lastName.value,
                valid: input === 'lastName' ? valid : valuesup.lastName.valid
            },
            email: {
                value: input === 'email' ? value : valuesup.email.value,
                valid: input === 'email' ? valid : valuesup.email.valid
            },
            password: {
                value: input === 'password' ? value : valuesup.password.value,
                valid: input === 'password' ? valid : valuesup.password.valid
            }
        }
    )
}

  const labels_up = [
    {
        label: 'FIRST NAME',
        type: '',
        input: 'firstName',
        value: valuesup.firstName.value,
        valid: valuesup.firstName.valid
    },
    {
        label: 'LAST NAME',
        type: '',
        input: 'lastName',
        value: valuesup.lastName.value,
        valid: valuesup.lastName.valid
        
    },
    {
        label: 'E-MAIL',
        type: '',
        input: 'email',
        value: valuesup.email.value,
        valid: valuesup.email.valid
    },
    {
        label: 'PASSWORD',
        type: 'password',
        input: 'password',
        value: valuesup.password.value,
        valid: valuesup.password.valid
    },
  ]

  const [valuesin, setValuesin] = useState(
    {
        email: {
            value: ""
        },
        password: {
            value: ""
        }
    }
  )

  const updateValuesin = (input, value, valid) => {
    setValuesin((prevValues) => {
        return {
            ...prevValues,
            email: {
                value: input === 'E-MAIL' ? value : prevValues.email.value
            },
            password: {
                value: input === 'PASSWORD' ? value : prevValues.password.value
            }
        };
    });
};

  const labels_in = [
    {
        label: 'E-MAIL',
        type: '',
        input: 'E-MAIL',
        valid: true
    },
    {
        label: 'PASSWORD',
        type: 'password',
        input: 'PASSWORD',
        valid: true
    },
  ]

  const sendup = () => {
    if (validName(valuesup.firstName.value) && validName(valuesup.lastName.value) && validEmail(valuesup.email.value) && validPassword(valuesup.password.value)){
        handleCompleted()
    }else{
        if (validName(valuesup.firstName.value) === false && valuesup.firstName.valid != ""){
            updateValues("firstName", valuesup.firstName.value, false)
        }

        if (validName(valuesup.lastName.value) === false && valuesup.lastName.valid != ""){
            updateValues("lastName", valuesup.lastName.value, false)
        }

        if (validEmail(valuesup.email.value) === false && valuesup.email.valid != ""){
            updateValues("email", valuesup.email.value, false)
        }

        if (validPassword(valuesup.password.value) === false && valuesup.password.valid != ""){
            updateValues("password", valuesup.password.value, false)
        }
        
        handleAlert()
    }
}

const sendin = () => {
    console.log(valuesin)
}

  return (
    <div className='dom'>
       <Sign 
       valuesup={valuesup}
       updateValues={updateValues}
       labels_up={labels_up}
       valuesin={valuesin}
       setValuesin={setValuesin}
       updateValuesin={updateValuesin}
       labels_in={labels_in}
       sendup={sendup}
       sendin={sendin}
       alert={alert}
       handleAlert={handleAlert}
       completed={completed}
       handleCompleted={handleCompleted}
       step={step}
       handleStep={handleStep}
       />
       <SignMobile 
       valuesup={valuesup}
       updateValues={updateValues}
       labels_up={labels_up}
       valuesin={valuesin}
       setValuesin={setValuesin}
       updateValuesin={updateValuesin}
       labels_in={labels_in}
       sendup={sendup}
       sendin={sendin}
       alert={alert}
       completed={completed}
       handleAlert={handleAlert}
       handleCompleted={handleCompleted}
       />
    </div>
  );
}

export default App;
