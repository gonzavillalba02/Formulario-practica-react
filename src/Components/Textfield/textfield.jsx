import React from "react";
import TextField from '@mui/material/TextField';
import './textfield.css';

const Textfield = ({label, type}) => {
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
            />
            <div className="white-div">
                hola
            </div>
        </>
    )
}

export default Textfield;