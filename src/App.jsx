import { useEffect, useState } from "react";
import DataList from "./components/DataList.jsx";
import SelectTypeForm from "./components/SelectTypeForm.jsx";
import "./App.css";

export default function App() {
    const [dataType, setDataType] = useState("");
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(null);

    console.log({ data });

    const getData = () => {
        setData(null);
        if (dataType) {
            setLoading(true);
            fetch(`https://swapi.dev/api/${dataType}`)
                .then((res) => res.json())
                .then((resData) => {
                    setData(resData);
                    setLoading(false);
                });
        }
    };

    useEffect(() => getData(), [dataType]);

    return (
        <div>
            <SelectTypeForm setDataType={setDataType} />
            {data ? (
                <DataList dataType={dataType} data={data.results} />
            ) : (
                loading && <p>Loading...</p>
            )}
        </div>
    );
}
