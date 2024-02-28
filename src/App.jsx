import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  useEffect(() => {
    const getSwapi = async () => {
      const response = await fetch(`https://swapi.dev/api/${dataType}/`);
      const json = await response.json();
      setData(json);
    };
    getSwapi().catch(console.error);
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
