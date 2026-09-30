import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #ccc',
      marginBottom: '20px'
    }}>
      <h2 style={{ margin: 0 }}>Mini Task Manager</h2>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '6px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: theme === 'dark' ? '#444' : '#f0f0f0',
          color: theme === 'dark' ? '#fff' : '#000'
        }}
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}