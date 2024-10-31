import React from 'react';
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addAssignment } from './reducer';
import { useParams } from 'react-router-dom';

export default function AssignmentSearch() {
    const { cid } = useParams();
  return (
    <div className="toolbar-container mb-3">
      <div className="search-container">
        <FaMagnifyingGlass className="search-icon" />
        <input
          type="text"
          placeholder="    Search..."
          className="form-control me-2"
        />
      </div>
      <button className="btn btn-lg btn-secondary me-2 float-end">
        <FaPlus /> Group
      </button>
      <a href={`#/Kanbas/Courses/${cid}/Assignments/new`} className="no-link-style">
    <button
        className="btn btn-lg btn-danger me-2 float-end"
      >
        <FaPlus /> Assignment
      </button>
      </a>


    </div>
  );
}

