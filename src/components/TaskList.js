import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  const total = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const activeCount = total - completedCount;

  return (
    <div>
      {/* Thống kê */}
      <div style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '14px' }}>
        Tổng: {total} | Chưa làm: {activeCount} | Hoàn thành: {completedCount}
      </div>

      {/* Danh sách task */}
      <div>
        {tasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Không có công việc nào.</p>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={onToggle} 
              onDelete={onDelete} 
            />
          ))
        )}
      </div>
    </div>
  );
}