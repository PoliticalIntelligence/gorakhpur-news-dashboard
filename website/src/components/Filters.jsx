import "./Filters.css";

function Filters({ selectedDistrict, setSelectedDistrict }) {
  const districts = [
    "All Districts",
    "Gorakhpur",
    "Kushinagar",
    "Deoria",
    "Maharajganj",
    "Basti",
    "Sant Kabir Nagar",
    "Mau",
    "Ballia",
    "Azamgarh",
    "Ghazipur",
  ];

  return (
    <div className="filters-container">
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search News..."
      />

      <select
        className="filter-select"
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
      >
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      <select className="filter-select">
        <option>All Assemblies</option>
      </select>

      <input className="date-picker" type="date" />

      <button className="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default Filters;