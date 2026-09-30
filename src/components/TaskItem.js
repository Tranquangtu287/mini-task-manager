import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 12px',
      marginBottom: '8px',
      border: '1px solid #eee',
      borderRadius: '4px'
    }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
      <button 
        onClick={() => onDelete(task.id)}
        style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        [Xóa]
      </button>
    </div>
  );
}