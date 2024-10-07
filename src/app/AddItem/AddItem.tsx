import { Box, TextField } from '@mui/material';
import React, { FC, useRef } from 'react';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import { addNewTask } from '../../features/tasks/tasksThunks';
import { useAppDispatch } from '../../store/hooks';

export const AddItem: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = (): void => {
    const newTask = inputRef.current?.value.trim();
    if (newTask) {
      dispatch(addNewTask(newTask));
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <TextField
        inputRef={inputRef}
        label="Enter a new task"
        variant="outlined"
        fullWidth
        onKeyDown={handleKeyDown}
      />
      <Spacer size="sm" direction="horizontal" />
      <Button onClick={handleAddTask}>Add</Button>
    </Box>
  );
};
