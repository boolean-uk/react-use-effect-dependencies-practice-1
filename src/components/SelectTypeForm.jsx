import PropTypes from "prop-types";

function SelectTypeForm(props) {
  // Write code here...
  const handleFormChange = (event) => {
    const value = event.target.value;
    props.setDataType(value);
    console.log(value);
  };
  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleFormChange}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}
SelectTypeForm.propTypes = {
  setDataType: PropTypes.func,
};
export default SelectTypeForm;
