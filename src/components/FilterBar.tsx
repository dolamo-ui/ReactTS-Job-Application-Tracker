import React from 'react';

interface Props {
  search: string;
  status: string;
  sort: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FilterBar: React.FC<Props> = ({ search, status, sort, onFilterChange }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search by title or company"
        value={search}
        onChange={onFilterChange}
        className="px-3 py-2 border rounded"
      />

      <select name="status" value={status} onChange={onFilterChange} className="px-3 py-2 border rounded">
        <option value="">All Status</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="rejected">Rejected</option>
        <option value="hired">Hired</option>
      </select>

      <select name="sort" value={sort} onChange={onFilterChange} className="px-3 py-2 border rounded">
        <option value="asc">Company A-Z</option>
        <option value="desc">Company Z-A</option>
      </select>
    </div>
  );
};

export default FilterBar;
