import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);
  // Write code here.
  //
  async function getData() {
    const response = await fetch(`https://swapi.dev/api/${dataType}/`)
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    if (dataType !== ''){
      getData()
    }
    }, [dataType])


  console.log({ data });

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
