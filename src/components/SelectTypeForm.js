function SelectTypeForm({ setDataType }) {
  function handleSubmit(event) {
    event.preventDefault();
    const selectedValue = event.target.type.value;
    setDataType(selectedValue);
  }

  return (
    <form
      className="three-column-grid__expand-two gap-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type">
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Startships</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SelectTypeForm;
