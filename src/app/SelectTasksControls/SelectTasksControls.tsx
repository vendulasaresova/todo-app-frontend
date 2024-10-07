import { Box, Checkbox, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { SelectMenu } from '../../components/SelectMenu/SelectMenu';

interface ISelectTasksControlsProps {
  selectTasks: (checked: boolean) => void;
}

export const SelectTasksControls: FC<ISelectTasksControlsProps> = ({
  selectTasks,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    selectTasks(checked);
  };

  return (
    <SelectMenu>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <Typography variant="body1">
          Mark all tasks in the view as {isChecked ? 'incomplete' : 'complete'}
        </Typography>
      </Box>
    </SelectMenu>
  );
};
