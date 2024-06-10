import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'
interface passwordInputInterface {
    name: string,
    onChange: any,
    // error: string
}
export default function PasswordInput({ onChange, name}: passwordInputInterface) {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(prev => !prev)
  return (
    <div>

      <FormControl variant="filled" sx={{border: 0}} className='focus:bg-white block rounded-3xl bg-[#E3E3E4] w-full 2xl:mb-[25px] 2xl:py-2'>
          <InputLabel sx={[{color: "#391f0f"},()=>({'&.Mui-focused': {color: "#391f0f"}})]} htmlFor="standard-adornment-password">Password</InputLabel>
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
                  {showPassword ? <Visibility className='mb-6 mr-2'/> : <VisibilityOff className='mb-6 mr-2'/>}
              </IconButton>
              </InputAdornment>
          }
          />
      </FormControl>
  </div>

  )
}
