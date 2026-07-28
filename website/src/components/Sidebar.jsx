import "./Sidebar.css";

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

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Districts</h2>

      <ul>

        {districts.map((district) => (

          <li key={district}>
            {district}
          </li>

        ))}

      </ul>

    </aside>
  );
}

export default Sidebar;