const CharacterDropdown = ({ selected, onChange }) => (
  <select name="characters" onChange={onChange} value={selected}>
    <option value="square">square</option>
    <option value="circle">circle</option>
  </select>
);

export default CharacterDropdown;