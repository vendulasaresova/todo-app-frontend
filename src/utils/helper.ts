import { ITask } from '../core/types/task.types';

export const sortTasks = (
  sortingValue: string,
  sortingType: string,
  tasks: ITask[]
): ITask[] => {
  const isAscending = sortingType === 'asc';

  switch (sortingValue) {
    case 'createdDate':
      return [...tasks].sort((a, b) =>
        isAscending
          ? a.createdDate - b.createdDate
          : b.createdDate - a.createdDate
      );

    case 'completedDate':
      return [...tasks].sort((a, b) => {
        if (a.completed && b.completed) {
          return isAscending
            ? (a.completedDate || 0) - (b.completedDate || 0)
            : (b.completedDate || 0) - (a.completedDate || 0);
        }
        return a.completed ? 1 : -1;
      });

    case 'completed':
      return [...tasks].sort((a, b) =>
        isAscending
          ? Number(a.completed) - Number(b.completed)
          : Number(b.completed) - Number(a.completed)
      );

    default:
      return tasks;
  }
};

export const filterTasks = (
  filteringValue: string,
  tasks: ITask[]
): ITask[] => {
  switch (filteringValue) {
    case 'completed':
      return tasks.filter((task) => task.completed);
    case 'incompleted':
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
};
