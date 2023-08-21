import { useState } from "react";

function SelectTypeForm(props) {
  // Write code here...
  const [selectedType, setSelectedType] = useState('')

  const handleChange = (event) => {
    const newSelectedType = event.target.value
    setSelectedType(newSelectedType)
    props.setDataType(newSelectedType)
  }

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type"
        onChange={event => handleChange(event)}
        defaultValue={selectedType}
      >
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
