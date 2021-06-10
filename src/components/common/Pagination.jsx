import React from "react";
import _ from "lodash";
import propTypes from "prop-types";
const Pagination = ({ pageSize, itemCount, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                href="/#"
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
Pagination.propTypes = {
  pageSize: propTypes.number.isRequired,
  itemCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};
export default Pagination;
