import create from "zustand";

import { task } from "../types";
import { api } from "../services/api";

interface TasksState {
  tasks: task[];
  taskBeingEdited: string;
  isTaskBeingEdited: boolean;
  startEditingTask: (taskID: string) => void;
  stopEditingTask: () => void;
  updateTasks: () => Promise<void>;
  addTask: (project?: string) => Promise<void>;
  changeTaskDescription: (taskID: string, description: string) => void;
  isDraggingTask: boolean;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
  removeTask: (id: string) => Promise<void>;
  reorderTasks: (startIndex: number, endIndex: number) => void;
}

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  taskBeingEdited: "",
  isTaskBeingEdited: false,
  startEditingTask: (taskID) => {
    set({ taskBeingEdited: taskID, isTaskBeingEdited: true });
  },
  stopEditingTask: () => {
    set((state) => {
      const isTaskEmpty = () => {
        return state.tasks.find(
          (t) => t.id === state.taskBeingEdited && t.description === ""
        );
      };

      if (isTaskEmpty()) {
        setTimeout(() => {
          if (isTaskEmpty()) {
            state.removeTask(state.taskBeingEdited);
          }
        }, 3000);
      }
      return { taskBeingEdited: "", isTaskBeingEdited: false };
    });
  },
  updateTasks: async () => {
    set({ tasks: (await (await api.get("/tasks")).data.tasks) as task[] });
  },
  isDraggingTask: false,
  addTask: async (project) => {
    const tasks = (await (await api.get("/tasks")).data.tasks) as task[];

    const index = Math.max(
      ...tasks.map((t) => parseInt(project ? t.projectIndex : t.inboxIndex))
    ).toString();

    await api.post("/tasks", {
      projectId: project ? project : "",
      description: "",
      inboxIndex: project ? index.toString() : 0,
      projectIndex: project ? index.toString() : 0,
    });

    const updatedTasks = (await (await api.get("/tasks")).data.tasks) as task[];

    set({
      tasks: updatedTasks,
      taskBeingEdited: updatedTasks.find((t) => t.description === "")
        ?.description,
    });
  },
  changeTaskDescription: async (taskID, description) => {
    set((state) => {
      const tasks = [
        ...state.tasks.map((t) =>
          t.id === taskID ? { ...t, description: description } : t
        ),
      ];
      return {
        tasks: tasks,
      };
    });

    await api.put(`/tasks/${taskID}`, {
      description: description,
    });
  },
  setIsDraggingTask: (isDraggingTask) => {
    set({
      isDraggingTask: isDraggingTask,
    });
  },
  removeTask: async (id) => {
    await api.delete(`/tasks/${id}`);
    set((state) => ({
      tasks: state.tasks.filter((todo: any) => todo.id !== id),
    }));
  },
  reorderTasks: (startIndex, endIndex) => {
    set((state) => {
      const result = [...state.tasks];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return {
        tasks: result,
      };
    });
  },
}));