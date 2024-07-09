import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import TasksProvider from "./state-management/tasks/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <LoginStatus />
        <TaskList />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
