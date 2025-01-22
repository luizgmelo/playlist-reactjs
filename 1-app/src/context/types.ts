import { ReactNode } from "react";
import { FilterType } from "../types/FilterType";
import { TaskType } from "../types/TaskType";

export interface IGlobalContextProps {
  children: ReactNode;
}

export interface IGlobalContext {
  filter: FilterType;
  tasks: TaskType[];
  input: string;
  handleSetFilter: (filter: FilterType) => void;
  handleSetTasks: (tasks: TaskType[]) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleTaskToggle: (id: string) => void;
  handleSetInput: (value: string) => void;
  filteredTasks: () => TaskType[];
  handleUncheckAllCompletedtasks: () => void;
}
