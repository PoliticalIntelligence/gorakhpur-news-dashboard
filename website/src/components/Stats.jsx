import "./Stats.css";

function Stats({ news }) {
  const totalArticles = news.length;

  const totalDistricts = new Set(
    news.map((item) => item.district).filter(Boolean)
  ).size;

  const totalAssemblies = new Set(
    news.map((item) => item.assembly).filter(Boolean)
  ).size;

  console.log(news[0]);

  const latestTime =
  news.length > 0
    ? news[0].scrape_time || "--"
    : "--";

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
        <h3>{latestTime}</h3>
        <p>Last Updated</p>
      </div>

    </div>
  );
}

export default Stats;