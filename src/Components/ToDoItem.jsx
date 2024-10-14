import React, { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editedText.trim()) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}>
      <div className="d-flex flex-grow-1 align-items-center">
        {isEditing ? (
          <input
            type="text"
            className="form-control me-3"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="d-flex">
        <button
          className={`btn btn-sm ${todo.completed ? 'btn-secondary' : 'btn-success'} me-2`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className={`btn btn-sm ${isEditing ? 'btn-primary' : 'btn-warning'} me-2`}
          onClick={handleEdit}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
