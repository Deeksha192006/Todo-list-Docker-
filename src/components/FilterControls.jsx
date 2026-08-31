import React from 'react';
import { Search, X } from 'lucide-react';

export default function FilterControls({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter
}) {
  const categories = ['All', 'Work', 'Personal', 'Design', 'Learning', 'Health'];

  return (
    <>
      <section className="controls-bar">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks by name or category..."
          />
          {searchQuery && (
            <button className="clear-btn" onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className="filter-pills">
          {['all', 'active', 'completed'].map((st) => (
            <button
              key={st}
              className={`pill-btn ${statusFilter === st ? 'active' : ''}`}
              onClick={() => setStatusFilter(st)}
            >
              {st.charAt(0).toUpperCase() + st.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${categoryFilter === cat ? 'active' : ''}`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat === 'All' ? 'All Categories' : cat}
          </button>
        ))}
      </div>
    </>
  );
}
