import "./Header.css";

function Header() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-left">
          <h1>Gorakhpur Zonal News Dashboard</h1>

          <p>
            Real-time Monitoring of District & Assembly News
          </p>
        </div>

        <div className="header-right">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE
          </div>

          <div className="date-box">
            <span className="date-label">Last Updated</span>
            <span className="date-value">{formattedDate}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;