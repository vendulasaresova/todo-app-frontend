import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addNewTask,
  editTask,
  fetchCompletedTasks,
  fetchTasks,
  markTaskComplete,
  markTaskIncomplete,
  removeTask,
} from './tasksThunks';
import { ITask } from '../../core/types/task.types';

interface TasksState {
  tasks: ITask[];
  loading: boolean;
  completedTasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  completedTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.tasks = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(
      addNewTask.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        state.tasks.push(action.payload);
      }
    );

    builder.addCase(
      editTask.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      }
    );

    builder.addCase(
      removeTask.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.completedTasks = state.completedTasks.filter(
          (task) => task.id !== action.payload
        );
      }
    );

    builder.addCase(
      markTaskComplete.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        const task = state.tasks.find((task) => task.id === action.payload.id);
        if (task) {
          task.completed = true;
          state.completedTasks.push(task);
        }
      }
    );

    builder.addCase(
      markTaskIncomplete.fulfilled,
      (state, action: PayloadAction<ITask>) => {
        const taskIndex = state.completedTasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (taskIndex !== -1) {
          state.completedTasks.splice(taskIndex, 1);
          const originalTask = state.tasks.find(
            (t) => t.id === action.payload.id
          );
          if (originalTask) {
            originalTask.completed = false;
          }
        }
      }
    );

    builder.addCase(
      fetchCompletedTasks.fulfilled,
      (state, action: PayloadAction<ITask[]>) => {
        state.completedTasks = action.payload;
      }
    );
  },
});

export default tasksSlice.reducer;
