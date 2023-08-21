import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log({ data });

  async function getData() {
    if (!dataType) return;
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/" + dataType + "/");
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <DataList dataType={dataType} data={data.results} />
      ) : null}
    </div>
  );
}
