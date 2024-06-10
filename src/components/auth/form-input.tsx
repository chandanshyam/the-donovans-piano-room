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
      <FormControl variant="filled" className='focus:bg-white block rounded-3xl bg-[#E3E3E4] w-full' error={!!error}>
        <InputLabel sx={[{color: "#391f0f"},()=>({'&.Mui-focused': {color: "#391f0f"}})]} htmlFor="standard-adornment-password">{field.label}</InputLabel>
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
