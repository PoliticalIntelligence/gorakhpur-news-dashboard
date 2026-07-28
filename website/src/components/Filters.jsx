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
    "Ghazipur"
  ];

  return (
    <div className="filters">

      <input
        type="text"
        placeholder="🔍 Search News..."
      />

      <select
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
      >
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      <select>
        <option>All Assemblies</option>
      </select>

      <input type="date" />

    </div>
  );
}

export default Filters;