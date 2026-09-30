import React, { useState } from 'react';
import { initialTasks } from './datas/tasks';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function AppContent() {
  const { theme } = useTheme();
  const [tasks, setTasks] = useLocalStorage('my_tasks', initialTasks);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Thêm task mới
  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Đổi trạng thái hoàn thành
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 3. Xóa task (Mới - có thêm hộp thoại xác nhận)
  const handleDeleteTask = (id) => {
    // Hiện thông báo hỏi người dùng, nếu bấm "OK" (true) thì mới tiến hành xóa
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (isConfirmed) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  // Lọc và Tìm kiếm task
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
    if (filter === 'active') return !task.completed && matchesSearch;
    if (filter === 'completed') return task.completed && matchesSearch;
    return matchesSearch;
  });

  const isDark = theme === 'dark';

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
        <Header />
        <TaskForm 
          onAddTask={handleAddTask}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        <TaskList 
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}