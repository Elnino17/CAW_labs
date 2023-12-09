import React, { useState } from 'react';
import './Task.css';
import SubTaskForm from './SubTaskForm';

function Task({ index, task, deleteTask }) {
  const [subtasks, setSubtasks] = useState([]);
  const [showSubtasks, setShowSubtasks] = useState(true);

  const addSubtask = (subtaskText) => {
    const newSubtask = { text: subtaskText, completed: false };
    setSubtasks([...subtasks, newSubtask]);
  };

  const markSubtaskDone = (subtaskIndex) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[subtaskIndex].completed = !updatedSubtasks[subtaskIndex].completed;
    setSubtasks(updatedSubtasks);
  };

  const toggleSubtasksVisibility = () => {
    setShowSubtasks(!showSubtasks);
  };

  return (
    <div className="task">
      <div onClick={toggleSubtasksVisibility} style={{ cursor: 'pointer' }}>
        <strong>Task {index + 1}:</strong> {task.text}
      </div>
      {showSubtasks && (
        <div className="task-content">
          <SubTaskForm addSubtask={addSubtask} />
          {subtasks.map((subtask, subtaskIndex) => (
            <div key={subtaskIndex} className={`subtask ${subtask.completed ? 'completed' : ''}`}>
              <span className={`subtask-text ${subtask.completed ? 'line-through' : ''}`}>
                {subtask.text}
              </span>
              <button className='done' onClick={() => markSubtaskDone(subtaskIndex)}>
                {subtask.completed ? 'UNDONE' : 'DONE'}
              </button>
            </div>
          ))}
        </div>
      )}
      <button className="delete" onClick={() => deleteTask(index)}>X</button>
    </div>
  );
}

export default Task;
