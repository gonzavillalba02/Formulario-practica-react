import React from "react";
import TextField from '@mui/material/TextField';
import './textfield.css';

const Textfield = ({label, type, updateValues, valor, input, error, height, fontSize}) => {
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
                    height: {height},
                }
            }}
            InputLabelProps={{
                style:{ 
                    fontSize: {fontSize},
                }
            }}
            InputProps={{
                style:{
                    fontSize: {fontSize},
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