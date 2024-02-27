import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
  useEffect(() => {
    console.log(
      "Running my effect each time the dependencies are updatred; note: dependency array contains [newTaskText]..."
    );
    const TODOS_ENDPOINT = `https://swapi.dev/api/${dataType}/`;
    fetch(TODOS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        console.log("setting new state....");
        setData(data.results);
      });
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data} />}
    </div>
  );
}
