import { useGlobalContext } from "../../context/GlobalContext";
import { TaskType } from "../../types/TaskType";

interface ITaskProps {
  task: TaskType;
}

export default function Task({ task }: ITaskProps) {
  const { done, title, id } = task;
  const { handleTaskToggle } = useGlobalContext();

  return (
    <li
      className={`task-item ${done ? "task-item__done" : ""}`}
      key={id}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => handleTaskToggle(id)} />
      {title}
    </li>
  );
}