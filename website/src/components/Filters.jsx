import "./Filters.css";

function Filters({
  filters,
  setFilters,
  availableDates,
  assemblies,
}) {
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

  const handleDistrictChange = (e) => {
    setFilters({
      ...filters,
      district: e.target.value,
      assembly: "All Assemblies",
    });
  };

  const handleReset = () => {
    setFilters({
      date: "latest",
      district: "All Districts",
      assembly: "All Assemblies",
      search: "",
    });
  };

  return (
    <div className="filters-container">

      {/* Search */}
      <input
        className="search-box"
        type="text"
        placeholder="Search headline, district or assembly..."
        value={filters.search}
        onChange={(e) =>
          setFilters({
            ...filters,
            search: e.target.value,
          })
        }
      />

      {/* Date */}
      <select
        className="filter-select"
        value={filters.date}
        onChange={(e) =>
          setFilters({
            ...filters,
            date: e.target.value,
          })
        }
      >
        <option value="latest">Latest</option>

        {availableDates.map((item) => (
          <option key={item.date} value={item.date}>
            {new Date(item.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </option>
        ))}
      </select>

      {/* District */}
      <select
        className="filter-select"
        value={filters.district}
        onChange={handleDistrictChange}
      >
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      {/* Assembly */}
      <select
        className="filter-select"
        value={filters.assembly}
        onChange={(e) =>
          setFilters({
            ...filters,
            assembly: e.target.value,
          })
        }
      >
        {assemblies.map((assembly) => (
          <option key={assembly} value={assembly}>
            {assembly}
          </option>
        ))}
      </select>

      {/* Reset */}
      <button
        className="reset-btn"
        onClick={handleReset}
      >
        Reset
      </button>

    </div>
  );
}

export default Filters;