import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);

  console.log({ data });

  useEffect(() => {
    if (dataType)
    {
      const fetchData = async () => {
        try
        {
          const response = await fetch(`https://swapi.dev/api/${dataType}/`);
          if (!response.ok)
          {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error)
        {
          console.error("Fetch error: ", error);
        }
      };

      fetchData();
    }
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
