import React from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Grid } from '@mui/material';


const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  return (
    <Grid size={{xs :12 , sm: half ? 6 : 12}}>
        <TextField
            name={name}
            variant='outlined'
            onChange={handleChange}
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps = {name === 'password' ? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }: undefined}
        >
        </TextField>
    </Grid>
  )
}

export default Input