import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default function AssignmentSearch() {
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
            <button className="btn btn-lg btn-secondary me-2 float-end"><FaPlus /> Group</button>
            <button className="btn btn-lg btn-danger me-2 float-end"><FaPlus /> Assignment</button>
        </div>
    )
}

