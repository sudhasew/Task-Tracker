import { FormEvent, useState } from "react";

interface Props {
  onAdd: (task: any) => void;
}

const AddTask = ({ onAdd }: Props) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="task-form" onSubmit={onSubmit}>
      <div className="form-task-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-task-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-task-control form-reminder">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          className="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div>
        <input type="submit" value="Save Task" className="submit-btn" />
      </div>
    </form>
  );
};

export default AddTask;
