import React from "react";
import TextField from '@mui/material/TextField';
import './textfield.css';

const Textfield = ({label, type, updateValues, valor, input, error}) => {
    return(
        <>
            <TextField 
            id="standard-basic" 
            label={label} 
            variant="standard" 
            size="small"
            color="secondary"
            fullWidth
            InputLabelProps={{
                style:{ 
                    fontSize: '12px',
                }
            }}
            InputProps={{
                style:{
                    fontSize: '12px',
                }
            }}
            type={type}
            value={valor}
            onChange={(e) => updateValues(input,  e.target.value, true)}
            error = {error === "" ? false : !error}
            />
            <div className="white-div">
                .
            </div>
        </>
    )
}

export default Textfield;