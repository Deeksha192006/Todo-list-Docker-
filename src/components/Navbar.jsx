import React from 'react';
import { CheckSquare, Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="logo-icon">
          <CheckSquare size={28} />
        </div>
        <div>
          <h1>TaskFlow</h1>
          <p className="tagline">Organize your daily tasks seamlessly</p>
        </div>
      </div>
      <div className="header-badges">
        <span className="badge react-badge">
          <Code2 size={16} /> React App
        </span>
      </div>
    </header>
  );
}
