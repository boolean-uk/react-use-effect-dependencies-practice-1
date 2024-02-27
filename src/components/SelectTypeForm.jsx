import PropTypes from "prop-types"

function SelectTypeForm({setDataType}) {
  // Write code here...
  const changeDataType = (e) =>{
    setDataType(e.target.value)
  }

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={changeDataType}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

SelectTypeForm.propTypes = {
  setDataType : PropTypes.func
}
export default SelectTypeForm;
