import React from 'react';
import { Check, Trash2, Calendar, ClipboardCheck } from 'lucide-react';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon"><ClipboardCheck size={48} /></div>
        <h3>No tasks found</h3>
        <p>All caught up! Create a new task or adjust your filters.</p>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <section className="todos-section">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-left">
              <div
                className="checkbox-custom"
                onClick={() => onToggleTodo(todo.id)}
              >
                <Check size={14} />
              </div>
              <div className="todo-details">
                <span className="todo-title">{todo.title}</span>
                <div className="todo-meta">
                  <span className="meta-badge meta-category">{todo.category}</span>
                  <span className={`meta-badge priority-${todo.priority}`}>
                    {todo.priority}
                  </span>
                  {todo.dueDate && (
                    <span className="meta-date">
                      <Calendar size={12} /> {formatDate(todo.dueDate)}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="todo-actions">
              <button
                className="action-btn delete-btn"
                onClick={() => onDeleteTodo(todo.id)}
                title="Delete Task"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
