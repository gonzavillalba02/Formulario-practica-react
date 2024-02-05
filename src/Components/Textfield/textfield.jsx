import React from "react";
import TextField from '@mui/material/TextField';
import './textfield.css';

const Textfield = ({label, type, updateValues, valor, input, error}) => {
    return(
        <div className="textfiel-complete">
            <TextField 
            id="standard-basic" 
            label={label} 
            variant="standard" 
            size="small"
            color="secondary"
            fullWidth
            inputProps={{
                style:{
                    height: '2.4vh',
                }
            }}
            InputLabelProps={{
                style:{ 
                    fontSize: '1.6vh',
                }
            }}
            InputProps={{
                style:{
                    fontSize: '1.6vh',
                }
            }}
            type={type}
            onChange={(e) => updateValues(input,  e.target.value, true)}
            error = {error === "" ? false : !error}
            />
        </div>
    )
}

export default Textfield;