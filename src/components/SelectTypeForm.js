function SelectTypeForm(props) {

  const { setDataType } = props;

  const handleDataTypeChange = (e) => {
    const selectedType = e.target.value;
    setDataType(selectedType);
  };

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleDataTypeChange}>        
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;