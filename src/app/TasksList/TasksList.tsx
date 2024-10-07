import { List, Collapse } from '@mui/material';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import InfoText from '../../components/InfoText';
import { filteringOptions } from '../../core/constants/filteringOptions';
import { ITask } from '../../core/types/task.types';
import {
  fetchTasks,
  markTaskComplete,
  markTaskIncomplete,
} from '../../features/tasks/tasksThunks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { filterTasks, sortTasks } from '../../utils/helper';
import ListControls from '../ListControls';
import SelectTasksControls from '../SelectTasksControls';
import Task from '../Task';

export const TasksList: FC = () => {
  const dispatch = useAppDispatch();

  const [filteringValue, setFilteringValue] = useState<string>(
    filteringOptions.find((option) => option.value === 'all')?.value || ''
  );
  const [sortingValue, setSortingValue] = useState<string>('createdDate');
  const [sortingType, setSortingType] = useState<string>('desc');

  const tasks = useAppSelector((state) => state.tasks.tasks);

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = filterTasks(filteringValue, tasks);
    return sortTasks(sortingValue, sortingType, filtered);
  }, [tasks, filteringValue, sortingValue, sortingType]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleSelectTasks = (selectCompleteValue: boolean) => {
    filteredAndSortedTasks.forEach((task) => {
      if (selectCompleteValue !== task.completed) {
        if (selectCompleteValue) {
          dispatch(markTaskComplete(task.id));
        } else {
          dispatch(markTaskIncomplete(task.id));
        }
      }
    });
  };

  const handleFilteringValueChange = (value: string) => {
    setFilteringValue(value);
  };

  const handleSortingValueChange = (value: string) => {
    setSortingValue(value);
  };

  const handleSortingTypeChange = (type: string) => {
    setSortingType(type);
  };

  return (
    <>
      <ListControls
        filteringValue={filteringValue}
        sortingValue={sortingValue}
        sortingType={sortingType}
        handleFilteringValueChange={handleFilteringValueChange}
        handleSortingTypeChange={handleSortingTypeChange}
        handleSortingValueChange={handleSortingValueChange}
      />
      {filteredAndSortedTasks.length ? (
        <>
          <SelectTasksControls selectTasks={handleSelectTasks} />
          <List>
            <TransitionGroup>
              {filteredAndSortedTasks.map((task: ITask) => (
                <Collapse key={task.id}>
                  <Task task={task} />
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </>
      ) : (
        <InfoText>No tasks to show</InfoText>
      )}
    </>
  );
};
