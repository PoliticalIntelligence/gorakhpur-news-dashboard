function Filters() {
  return (
    <div className="filters">

      <input
        type="text"
        placeholder="🔍 Search News..."
      />

      <select>
        <option>All Districts</option>
      </select>

      <select>
        <option>All Assemblies</option>
      </select>

      <input type="date" />

    </div>
  );
}

export default Filters;