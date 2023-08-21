import { useState } from "react";

function SelectTypeForm(props) {
  // Write code here...

  const handleChange = (event) => {
    event.preventDefault()
    props.setDataType(event.target.value)
  }

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={event => handleChange(event)}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
