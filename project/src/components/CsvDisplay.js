import React from "react";
import styles from "../styles/CsvDisplay.module.css";

const CsvDisplay = ({ data }) => {
  // Check if data is an array and has at least one row
  if (!Array.isArray(data) || data.length < 2) {
    return (
      <div className={styles.centered}>
        <p>No data to display</p>
      </div>
    );
  }

  // First row as headers
  const headers = data[0];
  // Remaining rows as data
  const tableData = data.slice(1, 6); // Limit to 5 rows

  return (
    <div className={styles.csvDisplay}>
      <h3>Uploaded Csv data</h3>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell || "N/A"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CsvDisplay;
