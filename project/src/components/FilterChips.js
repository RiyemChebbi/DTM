import React, { useState, useEffect } from 'react';

const FilterChips = ({ onFilterSelect }) => {
  const [filters, setFilters] = useState([
    { label: "Fix missing values" },
    { label: "Fix dates" },
    { label: "Fix gender column" },
    { label: "Group data by column" },
    { label: "Visualize distribution" },
    { label: "Download data" },
  ]);

  useEffect(() => {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      setFilters(JSON.parse(savedFilters));
    }
  }, []);

  const handleFilterClick = (filterLabel) => {
    console.log("Filter clicked:", filterLabel);
    onFilterSelect(filterLabel);
    // Optionally save state to localStorage
    localStorage.setItem('filters', JSON.stringify(filters));
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {filters.map((filter, index) => (
        <button
          key={index}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
            margin: "5px",
          }}
          onClick={() => handleFilterClick(filter.label)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
