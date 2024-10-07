import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Box, Checkbox } from '@mui/material';
import React, { FC, useRef } from 'react';
import {
  StyledListItem,
  StyledListItemText,
  StyledTextField,
  StyledTypography,
} from './TaskItem.styles';
import { ITask } from '../../core/types/task.types';

interface ITaskPresentationalProps {
  task: ITask;
  editingTaskId: string | null;
  onCompleteToggle: (task: ITask) => void;
  onRemoveClick: (id: string) => void;
  onEditClick: (task: ITask) => void;
  onUpdateTask: (id: string, text: string) => void;
}

export const TaskItem: FC<ITaskPresentationalProps> = ({
  task,
  editingTaskId,
  onCompleteToggle,
  onRemoveClick,
  onEditClick,
  onUpdateTask,
}) => {
  const editingTaskTextRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && editingTaskTextRef.current) {
      onUpdateTask(task.id, editingTaskTextRef.current.value);
    }
  };

  return (
    <StyledListItem completed={task.completed}>
      <Checkbox
        checked={task.completed}
        color="success"
        onChange={() => onCompleteToggle(task)}
        aria-label={`Mark task as ${task.completed ? 'uncompleted' : 'completed'}`}
      />
      {editingTaskId === task.id ? (
        <StyledTextField
          inputRef={editingTaskTextRef}
          onBlur={() => {
            if (editingTaskTextRef.current) {
              onUpdateTask(task.id, editingTaskTextRef.current.value);
            }
          }}
          onKeyPress={handleKeyPress}
          variant="standard"
          size="small"
          defaultValue={task.text}
          autoFocus
          label="Edit task"
        />
      ) : (
        <StyledListItemText
          primary={
            <StyledTypography completed={task.completed}>
              {task.text}
            </StyledTypography>
          }
        />
      )}
      <Box display="flex" alignItems="center">
        {!task.completed && editingTaskId !== task.id && (
          <IconButton onClick={() => onEditClick(task)} aria-label="Edit">
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={() => onRemoveClick(task.id)} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </StyledListItem>
  );
};
