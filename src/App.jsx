import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StatsDashboard from './components/StatsDashboard';
import TodoForm from './components/TodoForm';
import FilterControls from './components/FilterControls';
import TodoList from './components/TodoList';
import { Broom } from 'lucide-react';

const INITIAL_TODOS = [
  {
    id: '1',
    title: 'Master React state management and hooks',
    category: 'Learning',
    priority: 'High',
    dueDate: new Date().toISOString().split('T')[0],
    completed: true,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: '2',
    title: 'Design glassmorphic UI components',
    category: 'Design',
    priority: 'High',
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Refactor Todo app components & structure',
    category: 'Work',
    priority: 'Medium',
    dueDate: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Daily workout & hydration goal',
    category: 'Health',
    priority: 'Low',
    dueDate: new Date(Date.now() + 259200000).toISOString().split('T')[0],
    completed: false,
    createdAt: new Date().toISOString()
  }
];

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('taskflow_todos');
    return saved ? JSON.parse(saved) : INITIAL_TODOS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('taskflow_todos', JSON.stringify(todos));
  }, [todos]);

  // Handlers
  const handleAddTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };

  // Filtering Logic
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          todo.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' ? true :
                          statusFilter === 'active' ? !todo.completed :
                          todo.completed;
    const matchesCategory = categoryFilter === 'All' ? true :
                            todo.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Priority sorting
  const priorityWeight = { High: 3, Medium: 2, Low: 1 };
  filteredTodos.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    if (priorityWeight[b.priority] !== priorityWeight[a.priority]) {
      return priorityWeight[b.priority] - priorityWeight[a.priority];
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <>
      <div className="background-glob glob-1"></div>
      <div className="background-glob glob-2"></div>
      <div className="background-glob glob-3"></div>

      <div className="app-container">
        <Navbar />
        <StatsDashboard todos={todos} />
        <TodoForm onAddTodo={handleAddTodo} />
        <FilterControls
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <TodoList
          todos={filteredTodos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />

        <footer className="app-footer">
          <span>{activeCount} task{activeCount !== 1 ? 's' : ''} remaining</span>
          <button className="btn btn-text" onClick={handleClearCompleted}>
            <Broom size={16} /> Clear Completed
          </button>
        </footer>
      </div>
    </>
  );
}
