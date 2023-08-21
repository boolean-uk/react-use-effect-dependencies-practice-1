import { useState } from "react";

function SelectTypeForm(props) {
  // Write code here...
  const [selected, setSelected] = useState('')

  useState()
  props.setDataType(selected)

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" value={selected} onChange={(event) => setSelected(event.target.value)}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
