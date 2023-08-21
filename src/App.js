import { useEffect, useState } from 'react'
import SelectTypeForm from './components/SelectTypeForm'
import DataList from './components/DataList'
import './styles.css'

export default function App() {

  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  // console.log(data);

  useEffect(() => {
    if (dataType) {
      fetch(`https://swapi.dev/api/${dataType}/`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [dataType]); 
  
  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data.results} />}
    </div>
  );
}