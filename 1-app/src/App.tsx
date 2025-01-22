import './App.css';
import Empty from "./components/Empty/Empty";
import Filters from "./components/Filters/Filters";
import Task from "./components/Task/Task";
import GlobalContextProvider, { useGlobalContext } from "./context/GlobalContext";

function AppPage() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
}

function App() {
  const {
    filteredTasks,
    handleKeyDown,
    handleSetInput,
    input,
  } = useGlobalContext();


  return (
    <div className="container-app">
      <div className="container-app__header">
        <div className="container-app__mask"></div>
        <h1>TAREFAS</h1>

        <input
          type="text"
          placeholder="Criar nova tarefa"
          value={input}
          onChange={(event) => handleSetInput(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <ul className="content-tasks">

        <div>
          {filteredTasks().map((t) => (
            <Task task={t} />
          ))}

          <Empty
            title="Nenhuma tarefa cadastrada!"
            show={!filteredTasks().length}
          />

        </div>

        <Filters />

      </ul>
    </div>
  )
}

export default AppPage