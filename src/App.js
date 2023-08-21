import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  async function getData() {
    if (dataType) {
      const link = `https://swapi.dev/api/${dataType}/`
      const response = await fetch(link)
      const json = await response.json()
      console.log('json:', json)
      setData(json)
    }
  }

  useEffect(() => {
    getData()
  }, [dataType])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
