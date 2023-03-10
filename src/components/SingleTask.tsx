import { Task } from "../Task";
import { FaTimes } from "react-icons/fa";
interface Props {
  task: Task;
  onDelete: (id: number) => void;
}

const SingleTask = ({ task, onDelete }: Props) => {
  return (
    <div className="task">
      <div>
        <h3>{task.text}</h3>
        <h3>{task.day}</h3>
      </div>
      <div className="deleteIcon">
        <FaTimes onClick={() => onDelete(task.id)} />
      </div>
    </div>
  );
};

export default SingleTask;
