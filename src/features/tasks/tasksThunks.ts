import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  completeTask,
  createTask,
  deleteTask,
  getCompletedTasks,
  getTasks,
  incompleteTask,
  updateTask,
} from '../../api/taskApi';
import { IEditTaskPayload, ITask } from '../../core/types/task.types';

export const fetchTasks = createAsyncThunk<ITask[]>(
  'tasks/fetchTasks',
  async () => {
    return await getTasks();
  }
);

export const addNewTask = createAsyncThunk<ITask, string>(
  'tasks/addNewTask',
  async (text: string) => {
    return await createTask(text);
  }
);

export const editTask = createAsyncThunk<ITask, IEditTaskPayload>(
  'tasks/editTask',
  async ({ id, text }) => {
    return await updateTask(id, text);
  }
);

export const removeTask = createAsyncThunk<string, string>(
  'tasks/removeTask',
  async (id: string) => {
    await deleteTask(id);
    return id;
  }
);

export const markTaskComplete = createAsyncThunk<ITask, string>(
  'tasks/markTaskComplete',
  async (id: string) => {
    return await completeTask(id);
  }
);

export const markTaskIncomplete = createAsyncThunk<ITask, string>(
  'tasks/markTaskIncomplete',
  async (id: string) => {
    return await incompleteTask(id);
  }
);

export const fetchCompletedTasks = createAsyncThunk<ITask[]>(
  'tasks/fetchCompletedTasks',
  async () => {
    return await getCompletedTasks();
  }
);
export const removeAllCompletedTasks = createAsyncThunk<void>(
  'tasks/removeAllCompletedTasks',
  async (_, { dispatch }) => {
    const completedTasks = await getCompletedTasks();

    for (const task of completedTasks) {
      await dispatch(removeTask(task.id));
    }
  }
);
