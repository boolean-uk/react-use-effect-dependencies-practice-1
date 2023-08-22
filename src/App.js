import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log({ data });

  // Write code here.
    //getData could be banana or trigger effect
    async function getData() {
        const response = await fetch(`https://swapi.dev/api/${dataType}`) // the brackets should be ` not "'
        const json = await response.json()
        setData(json)
    }

    useEffect(() => {
        if(dataType!== '') {
          getData()
        }
        // setDataType(dataType)
    }, [dataType])

  //////

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}
