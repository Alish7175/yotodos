import './App.css';
import Navbar from './components/Navbar';
import TasksList from './components/TasksList';
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Navbar/>
      
      <TasksList/>
      
    </div>
  );
}

export default App;
