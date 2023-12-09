import React, { useState } from 'react';

function SubTaskForm({ addSubtask }) {
  const [subtaskText, setSubtaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subtaskText.trim() !== '') {
      addSubtask(subtaskText);
      setSubtaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="subtask-form">
      <input
        type="text"
        placeholder="Write a subtask..."
        value={subtaskText}
        onChange={(e) => setSubtaskText(e.target.value)}/>
      <button className='add' type="submit">Add</button>
    </form>
  );
}

export default SubTaskForm;
