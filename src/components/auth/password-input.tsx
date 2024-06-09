import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'
interface passwordInputInterface {
    name: string,
    showPassword: boolean,
    onChange: any,
    toggleShowPassword: any,
    // error: string
}
export default function PasswordInput({ onChange, showPassword, name, toggleShowPassword}: passwordInputInterface) {
  return (
    <FormControl variant="filled" sx={{border: 0}} className='focus:bg-white block rounded-3xl bg-[#E3E3E4]'>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
            required
            sx={{border: 0}}
            className='w-full py-1 pl-6 text-[16px]'
            type={showPassword ? 'text' : 'password'}
            name={name}
            onChange={onChange}
            disableUnderline
            endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}>
                {showPassword ? <VisibilityOff className='mb-5'/> : <Visibility className='mb-5'/>}
            </IconButton>
            </InputAdornment>
        }
        />
    </FormControl>

  )
}
