import React from 'react';
import { ListTodo, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function StatsDashboard({ todos }) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;
  const highPriority = todos.filter(t => !t.completed && t.priority === 'High').length;

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon total"><ListTodo size={22} /></div>
        <div className="stat-info">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon active"><Loader2 size={22} /></div>
        <div className="stat-info">
          <span className="stat-value">{active}</span>
          <span className="stat-label">In Progress</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon completed"><CheckCircle2 size={22} /></div>
        <div className="stat-info">
          <span className="stat-value">{completed}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon high-priority"><AlertTriangle size={22} /></div>
        <div className="stat-info">
          <span className="stat-value">{highPriority}</span>
          <span className="stat-label">High Priority</span>
        </div>
      </div>
    </section>
  );
}
