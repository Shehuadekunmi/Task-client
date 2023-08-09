import React from "react";
import { Link } from "react-router-dom";

const TaskHeader = ({ heading }) => {
  return (
    <div>
      <div className="d-flex justify-content-around taskheader align-items-center mt-1">
        <h2 className="fw-bold">{heading}</h2>
        {heading === "tag" ? (
          ""
        ) : (
          <p className="blue-text">
            <Link
              className="text-decoration-none me-5 fs-md-2 blue-text fw-bold create-link"
              to="/Newtask"
            >
              {" "}
              + Add New Tasks
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskHeader;
