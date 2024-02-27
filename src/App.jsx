import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  /* */
  useEffect(() => {
    console.log("New dataType selected");
    fetch(`https://swapi.dev/api/${dataType}/`, {})
      .then((response) => {
        return response.json();
      })
      .then((dataJson) => {
        if (dataType === "") {
          setData(null);
        } else setData(dataJson);
      });
  }, [dataType]);
  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
