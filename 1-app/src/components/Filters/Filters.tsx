import { useGlobalContext } from "../../context/GlobalContext";
import './Filters.css';

export default function Filters() {
  const { tasks, handleSetFilter, handleUncheckAllCompletedtasks
  } = useGlobalContext();

  const pendingTasksQtd = tasks.filter((task) => !task.done).length;

  return (
    <li className="content-tasks__actions">
      <div>
        <a href="#">{pendingTasksQtd} items restantes</a>
      </div>
      <div>
        <a href="#" onClick={() => handleSetFilter("all")}>
          Todas
        </a>
        <a href="#" onClick={() => handleSetFilter("pending")}>
          Ativas
        </a>
        <a href="#" onClick={() => handleSetFilter("done")}>
          Completadas
        </a>
      </div>
      <div>
        <a href="#" onClick={handleUncheckAllCompletedtasks}>
          Limpar Completadas
        </a>
      </div>
    </li>
  );
}