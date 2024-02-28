import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  const fetchData = async (dataType) => {
    const result = await fetch(`https://swapi.dev/api/${dataType}/`)
      .then((res) => res.json())
    setData(result)
  }

  useEffect(() => {
    fetchData(dataType)
  }, [dataType])

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results}/>}
    </div>
  );
}
