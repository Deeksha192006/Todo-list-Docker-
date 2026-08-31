import React, { useState } from 'react';
import { SquarePen, Plus, Tag, Layers, Calendar } from 'lucide-react';

export default function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Work');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo({
      id: Date.now().toString(),
      title: title.trim(),
      category,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    });

    setTitle('');
    setDueDate('');
  };

  return (
    <section className="card create-card">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row main-input-row">
          <div className="input-wrapper">
            <SquarePen className="input-icon" size={18} />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done today?"
              required
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <Plus size={18} /> Add Task
          </button>
        </div>

        <div className="form-row options-row">
          <div className="select-group">
            <label><Tag size={14} /> Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Design">Design</option>
              <option value="Learning">Learning</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <div className="select-group">
            <label><Layers size={14} /> Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">🔴 High</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

          <div className="select-group">
            <label><Calendar size={14} /> Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
