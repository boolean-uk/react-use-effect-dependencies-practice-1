import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  //
  useEffect(() => {
    console.log("Data Type: " + dataType)
    getData()
  },[dataType])

  async function getData() {
    if (dataType !== '') {
      const response = await fetch('https://swapi.dev/api/' + dataType + '/')
      const json = await response.json()
      setData(json)
    } else {
      setData(null)
    }
  }

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {console.log(dataType)}
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
