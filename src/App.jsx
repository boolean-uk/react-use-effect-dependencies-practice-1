import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  //
  useEffect(() => {
    console.log(
      "Running my effect each time the dependencies are updated; note: dependency array contains [dataType]..."
    );

    fetch(`https://swapi.dev/api/${dataType}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        console.log("setting new state....");
        setData(data.results);
      });
  }, [dataType]);

  const handleTypeChange = (selectedType) => {
    setDataType(selectedType);
  };

  return (
    <div>
      <SelectTypeForm handleTypeChange={handleTypeChange} />
      {data && <DataList dataType={dataType} data={data} />}
    </div>
  );
}
