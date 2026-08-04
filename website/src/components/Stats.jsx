import "./Stats.css";

function Stats({ news, lastUpdated }) {
  const totalArticles = news.length;

  const totalDistricts = new Set(
    news.map((item) => item.district).filter(Boolean)
  ).size;

  const totalAssemblies = new Set(
    news.map((item) => item.assembly).filter(Boolean)
  ).size;

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h3>{totalArticles}</h3>
        <p>Articles</p>
      </div>

      <div className="stat-card">
        <h3>{totalDistricts}</h3>
        <p>Districts</p>
      </div>

      <div className="stat-card">
        <h3>{totalAssemblies}</h3>
        <p>Assemblies</p>
      </div>

      <div className="stat-card update-card">
        <h3>{lastUpdated}</h3>
        <p>Last Updated</p>
      </div>

    </div>
  );
}

export default Stats;