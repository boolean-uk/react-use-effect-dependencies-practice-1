import { useState } from "react";

function SelectTypeForm(props) {
  // Write code here...
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(inputValue); 
  };


  return (
    <form className="three-column-grid__expand-two gap-md"  onSubmit={handleFormSubmit}>
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleInputChange} value={inputValue}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
      <button type="submit">Fetch Data</button>
    </form>
  );
}

export default SelectTypeForm;
