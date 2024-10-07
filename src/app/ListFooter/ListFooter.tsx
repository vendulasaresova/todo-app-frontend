import { Box, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import Button from '../../components/Button';
import Spacer from '../../components/Spacer';
import {
  fetchCompletedTasks,
  removeAllCompletedTasks,
} from '../../features/tasks/tasksThunks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const ListFooter: FC = () => {
  const dispatch = useAppDispatch();

  const countCompletedTasks = useAppSelector(
    (state) => state.tasks.completedTasks
  ).length;

  useEffect(() => {
    dispatch(fetchCompletedTasks());
  }, [dispatch]);

  const handleDeleteAllCompleted = () => {
    dispatch(removeAllCompletedTasks());
  };

  const getCompletedTasksMessage = () => {
    if (countCompletedTasks === 0) {
      return 'No tasks are completed';
    } else if (countCompletedTasks === 1) {
      return '1 task is completed';
    } else {
      return `Total of ${countCompletedTasks} tasks are completed`;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Typography variant="body1">{getCompletedTasksMessage()}</Typography>
      <Spacer size="md" direction="horizontal" />
      <Button
        onClick={handleDeleteAllCompleted}
        disabled={countCompletedTasks < 1}
      >
        Delete completed
      </Button>
    </Box>
  );
};
