import { LinearProgress, Typography } from '@mui/material';
import React, { FC } from 'react';
import AddItem from './AddItem';
import ListFooter from './ListFooter';
import TasksList from './TasksList';
import Layout from '../components/Layout';
import Spacer from '../components/Spacer';
import { useAppSelector } from '../store/hooks';

export const App: FC = () => {
  const loading = useAppSelector((state) => state.tasks.loading);

  return (
    <Layout>
      <Typography variant="h3" gutterBottom>
        Todo tasks app
      </Typography>
      <Typography variant="body1">
        I am thrilled to have you here! This Todo tasks application is designed
        to help you manage your tasks with ease and efficiency. Whether you’re
        juggling personal projects, work-related assignments, or daily chores,
        our app is here to support you in organizing your life.
      </Typography>
      <Spacer size="xxl" direction="vertical" />
      <AddItem />
      <Spacer size="lg" direction="vertical" />
      {loading && <LinearProgress />}
      <Spacer size="lg" direction="vertical" />
      <TasksList />
      <ListFooter />
    </Layout>
  );
};
