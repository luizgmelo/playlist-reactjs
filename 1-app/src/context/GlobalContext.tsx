import { createContext, useContext, useState } from "react";
import { IGlobalContext, IGlobalContextProps } from "./types";
import { useLocalStorage } from "usehooks-ts";
import { FilterType } from "../types/FilterType";
import { TaskType } from "../types/TaskType";
import { v4 as uuidv4 } from "uuid";


const GlobalContext = createContext({} as IGlobalContext);

export default function GlobalContextProvider({
  children
}: IGlobalContextProps) {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [tasks, setTasks] = useLocalStorage<TaskType[]>("tasks-list", [])

  function handleSetInput(value: string) {
    setInput(value);
  }

  function handleSetFilter(newFilter: FilterType) {
    setFilter(newFilter);
  }

  function handleSetTasks(newTasks: TaskType[]) {
    setTasks(newTasks);
  }


  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (input.length && event.key == "Enter") {
      setTasks([...tasks, { id: uuidv4(), done: false, title: input }]);
      setInput("");
    }
  }

  function handleTaskToggle(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function filteredTasks() {
    switch (filter) {
      case "all":
        return tasks;
      case "done":
        return tasks.filter((task) => task.done);
      case "pending":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  }

  function handleUncheckAllCompletedtasks() {
    const filteredTasks = tasks.map((task) =>
      task.done ? { ...task, done: false } : task);

    handleSetTasks(filteredTasks);
  }


  return (
    <GlobalContext.Provider value={{
      filter,
      tasks,
      input,
      handleSetFilter,
      handleSetTasks,
      handleKeyDown,
      handleTaskToggle,
      handleSetInput,
      filteredTasks,
      handleUncheckAllCompletedtasks
    }}>
      {children}
    </GlobalContext.Provider >
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}