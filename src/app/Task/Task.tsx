import React, { FC, useState } from 'react';
import TaskItem from '../../components/TaskItem';
import { ITask } from '../../core/types/task.types';
import {
  editTask,
  markTaskComplete,
  markTaskIncomplete,
  removeTask,
} from '../../features/tasks/tasksThunks';
import { useAppDispatch } from '../../store/hooks';

interface ITaskProps {
  task: ITask;
}

export const Task: FC<ITaskProps> = React.memo(({ task }) => {
  const dispatch = useAppDispatch();

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);

  const handleCompleteToggle = (task: ITask) => {
    if (task.completed) {
      dispatch(markTaskIncomplete(task.id));
    } else {
      dispatch(markTaskComplete(task.id));
    }
  };

  const handleRemoveClick = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleEditClick = (task: ITask) => {
    setEditingTaskId(task.id);
  };

  const handleUpdateTask = (id: string, text: string) => {
    if (text.trim()) {
      dispatch(editTask({ id, text }));
      setEditingTaskId(null);
    }
  };

  return (
    <TaskItem
      task={task}
      editingTaskId={editingTaskId}
      onCompleteToggle={handleCompleteToggle}
      onRemoveClick={handleRemoveClick}
      onEditClick={handleEditClick}
      onUpdateTask={handleUpdateTask}
    />
  );
});
