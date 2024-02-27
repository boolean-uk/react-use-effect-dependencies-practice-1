import React from "react";
import PropTypes from "prop-types";
function SelectTypeForm({ handleTypeChange }) {
  // Write code here...
  const handleChange = (event) => {
    const selectedType = event.target.value;
    handleTypeChange(selectedType);
  };

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleChange}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;

SelectTypeForm.propTypes = {
  handleTypeChange: PropTypes.func,
};
