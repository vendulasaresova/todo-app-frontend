import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    handleError(error, 'fetching tasks');
  }
};

export const createTask = async (text: string) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, { text });
    return response.data;
  } catch (error) {
    handleError(error, 'creating task');
  }
};

export const updateTask = async (id: string, text: string) => {
  try {
    const response = await axios.post(`${API_URL}/tasks/${id}`, { text });
    return response.data;
  } catch (error) {
    handleError(error, 'updating task');
  }
};

export const deleteTask = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/tasks/${id}`);
  } catch (error) {
    handleError(error, 'deleting task');
  }
};

export const completeTask = async (id: string) => {
  try {
    const response = await axios.post(`${API_URL}/tasks/${id}/complete`);
    return response.data;
  } catch (error) {
    handleError(error, 'completing task');
  }
};

export const incompleteTask = async (id: string) => {
  try {
    const response = await axios.post(`${API_URL}/tasks/${id}/incomplete`);
    return response.data;
  } catch (error) {
    handleError(error, 'marking task as incomplete');
  }
};

export const getCompletedTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks/completed`);
    return response.data;
  } catch (error) {
    handleError(error, 'fetching completed tasks');
  }
};

const handleError = (error: unknown, action: string) => {
  if (axios.isAxiosError(error)) {
    console.error(
      `Axios error ${action}:`,
      error.response?.data || error.message
    );
    throw new Error(
      `Failed to ${action}: ${error.response?.data || error.message}`
    );
  } else {
    console.error(`Unknown error ${action}:`, error);
    throw new Error(`Failed to ${action} due to an unknown error.`);
  }
};
