import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
    const [dataType, setDataType] = useState("");

    const [data, setData] = useState(null);
    // const [inputValue, setInputValue] = useState("");

    console.log({ data });

    // Write code here.
    //
    async function getData() {
        const response = await fetch(`https://swapi.dev/api/${dataType}/`);
        const jsonResponse = await response.json();
        setData(jsonResponse);
    }
    useEffect(() => {
        console.log("useEffect ran with ", dataType);
        if (dataType) {
            getData();
        }
    }, [dataType]);

    function handleSubmit(selectedValue) {
        // event.preventDefault();
        setDataType(selectedValue);
    }
    return (
        <div>
            <SelectTypeForm
                setDataType={setDataType}
                handleSubmit={handleSubmit}
            />
            {data && <DataList dataType={dataType} data={data.results} />}
        </div>
    );
}
