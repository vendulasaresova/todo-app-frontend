import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from './TaskItem';
import { ITask } from '../../core/types/task.types';
import { theme } from '../../core/theme';
import { ThemeProvider } from 'styled-components';

describe('TaskItem', () => {
  const task: ITask = {
    id: '1',
    text: 'Test task',
    completed: false,
    createdDate: 1728148429,
  };

  const onCompleteToggle = jest.fn();
  const onRemoveClick = jest.fn();
  const onEditClick = jest.fn();
  const onUpdateTask = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders task text correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={null}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  test('renders a checkbox for completion', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={null}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(onCompleteToggle).toHaveBeenCalledWith(task);
  });

  test('calls onRemoveClick when delete icon is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={null}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const deleteButton = screen.getByLabelText('Delete');
    fireEvent.click(deleteButton);
    expect(onRemoveClick).toHaveBeenCalledWith(task.id);
  });

  test('calls onEditClick when edit icon is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={null}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const editButton = screen.getByLabelText('Edit');
    fireEvent.click(editButton);
    expect(onEditClick).toHaveBeenCalledWith(task);
  });

  test('renders input field when editing', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={task.id}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const inputField = screen.getByDisplayValue('Test task');
    expect(inputField).toBeInTheDocument();
  });

  test('calls onUpdateTask when pressing Enter key in the input field', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={task.id}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const inputField = screen.getByDisplayValue('Test task');
    fireEvent.change(inputField, { target: { value: 'Updated task' } });
    fireEvent.keyDown(inputField, { key: 'Enter', charCode: 13 });

    expect(onUpdateTask).toHaveBeenCalledWith(task.id, 'Updated task');
  });

  test('calls onUpdateTask when input loses focus', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem
          task={task}
          editingTaskId={task.id}
          onCompleteToggle={onCompleteToggle}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
          onUpdateTask={onUpdateTask}
        />
      </ThemeProvider>
    );

    const inputField = screen.getByDisplayValue('Test task');
    fireEvent.change(inputField, { target: { value: 'Updated task' } });
    fireEvent.blur(inputField);

    expect(onUpdateTask).toHaveBeenCalledWith(task.id, 'Updated task');
  });
});
