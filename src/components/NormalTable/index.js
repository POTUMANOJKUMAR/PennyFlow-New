import React from "react";
import "./styles.scss";
import assets from "../../assets";

const NormalTable = ({ headerDetails, children, subscriptionTable }) => {
  return (
    <div className="table-container">
      <table className="main-table">
        <thead
          className={`${
            subscriptionTable
              ? "subscription-table-header"
              : "normal-table-header"
          }`}
        >
          <tr>
            {headerDetails.map((header, index) => (
              <th key={index}>
                {header.bank && (
                  <img
                    src={assets.Icons.hdfc}
                    alt="sort"
                    className="sort-icon"
                  />
                )}
                {header.label}
                {header.sortKey && (
                  <img
                    src={assets.Icons.sort}
                    alt="sort"
                    className="sort-icon"
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default NormalTable;
