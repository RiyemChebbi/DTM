import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import CsvDisplay from "./CsvDisplay";

const FileUpload = ({ file }) => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    if (file) {
      parseCSV(file);
    }
  }, [file]);

   const parseCSV = (file) => {
  Papa.parse(file, {
    complete: (result) => {
      if (Array.isArray(result.data)) {
        console.log("Parsed CSV Data:", result.data);
        setCsvData(result.data);
      } else {
        console.error("Parsed data is not an array:", result.data);
      }
    },
    header: true,
    skipEmptyLines: true,
  });
};

  return <>{csvData.length > 0 && <CsvDisplay data={csvData} />}</>;
};

export default FileUpload;
