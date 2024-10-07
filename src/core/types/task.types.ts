export interface ITask {
  id: string;
  text: string;
  completed: boolean;
  createdDate: number;
  completedDate?: number;
}

export interface IEditTaskPayload {
  id: string;
  text: string;
}
