import {
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from '@mui/material';
import React, { FC } from 'react';

interface IOption {
  value: string | number;
  label: string;
}

interface ISelectProps {
  id: string;
  label: string;
  options: IOption[];
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

export const Dropdown: FC<ISelectProps> = ({
  id,
  label,
  options,
  value,
  handleChange,
}) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    handleChange(event as SelectChangeEvent<string>);
  };

  return (
    <FormControl>
      <InputLabel id={`select-label-${id}`}>{label}</InputLabel>
      <Select
        labelId={`select-label-${id}`}
        id={`select-${id}`}
        value={value}
        label={label}
        onChange={handleSelectChange}
      >
        {options.map((option: IOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
