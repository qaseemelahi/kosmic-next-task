import { Autocomplete, Paper, TextField, useTheme } from '@mui/material'
import React from 'react'

interface DropDownProps {
  data: String[],
  value: string,
  setValue: (arg: string) => void
}
function DropDown({ data, value, setValue }: DropDownProps) {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={data}
      placeholder='Search'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue as string);
      }}
      sx={{
        width: { xs: '100%', md: '50%' },
      }}
      PaperComponent={({ children }) => (
        <Paper style={{ background: "rgba(58, 57, 64, 1)", borderRadius: '15px', }}>{children}</Paper>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: 'search',
            placeholder: 'Search',
            style: { backgroundColor: "rgba(58, 57, 64, 0.5)", borderRadius: '12px' }
          }}
        />
      )}
    />
  )
}

export default DropDown