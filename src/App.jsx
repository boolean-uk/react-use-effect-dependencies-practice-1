import { useState, useEffect } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    console.log("here!");
    console.log(dataType);
    // this is the ideal place to put fetches

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [dataType, url]);

  // Write code here.
  //
  const activateEffect = (e) => {
    var url = `https://swapi.dev/api/`;
    if (e !== "") {
      url = `https://swapi.dev/api/${e}/`;
      setUrl(url);
    }
    console.log(url);
    setDataType(e);
  };

  return (
    <div>
      <SelectTypeForm activateEffect={activateEffect} />
      {dataType.length == 0
        ? null
        : data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
