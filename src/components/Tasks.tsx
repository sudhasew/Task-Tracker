import { Task } from "../Task";
import SingleTask from "./SingleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onDelete: (id: number) => void;
}

const Tasks = ({ tasks, onDelete }: Props) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
