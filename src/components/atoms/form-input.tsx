import { FormControl, Input, InputLabel } from '@mui/material'
export interface InputData {
  name: string;
  type: string;
  label: string;
}

export default function InputForm({
  field,
  error,
  text,
  onChange,
}: {
  field: InputData;
  error: string;
  text: string;
  onChange: any;
}) {
  return (
    <div>
      <FormControl variant="filled" sx={{ border: 1, borderColor: '#391f0f'}} className='bg-[#fef8ee] block rounded-3xl w-full 2xl:mb-[25px] 2xl:py-2 3xl:py-3' error={!!error}>
        <InputLabel className='3xl:text-2xl 3xl:mt-2' sx={[{color: "#391f0f"},()=>({'&.Mui-focused': {color: "#391f0f"}})]} htmlFor="standard-adornment-password">{field.label}</InputLabel>
        <Input
          required
          className='w-full pl-6 text-[16px]'
          type={field.type}
          value={text}
          name={field.name}
          onChange={onChange}
          error={!!error}
          disableUnderline
        />
      </FormControl>
      {error && (<p className='mt-3'>{error}</p>)}
    </div>
  );
}
