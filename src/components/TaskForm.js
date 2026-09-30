import React, { useState } from 'react';

export default function TaskForm({ onAddTask, filter, setFilter, search, setSearch }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle('');
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* Form thêm task */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nhập tên công việc..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Thêm</button>
      </form>

      {/* Thanh lọc và tìm kiếm */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="all">Tất cả</option>
          <option value="active">Chưa làm</option>
          <option value="completed">Hoàn thành</option>
        </select>

        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
}