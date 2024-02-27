function SelectTypeForm(props) {
  // Write code here...

  function handleNewSelectedValue(event) {
    const value = event.target.value;
    console.log(`${value} was the value selected`);
    props.setDataType(value);
  }

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleNewSelectedValue}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
