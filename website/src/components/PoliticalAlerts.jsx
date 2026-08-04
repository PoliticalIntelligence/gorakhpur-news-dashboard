import "./PoliticalAlerts.css";

function PoliticalAlerts({ news }) {

  const politicalKeywords = [
    "विधायक",
    "सांसद",
    "भाजपा",
    "सपा",
    "बसपा",
    "कांग्रेस",
    "निषाद पार्टी",
    "अपना दल",
    "AIMIM",
    "राजभर",
    "चुनाव",
    "उपचुनाव",
    "टिकट",
    "प्रत्याशी",
    "कार्यकर्ता",
    "धरना",
    "प्रदर्शन",
    "आंदोलन",
    "ज्ञापन",
    "सभा",
    "रैली"
  ];

  const politicalAlerts = news.filter((item) => {

    const text =
      `${item.headline} ${item.summary}`.toLowerCase();

    return politicalKeywords.some((keyword) =>
      text.includes(keyword.toLowerCase())
    );

  });

  return (

    <div className="political-alerts">

      <h2>🔥 Political Alerts</h2>

      {politicalAlerts.length === 0 ? (

        <div className="no-alerts">
          No political alerts found.
        </div>

      ) : (

        politicalAlerts.slice(0, 10).map((item, index) => (

          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="alert-card"
          >

            <h4>{item.headline}</h4>

            <div className="alert-meta">

              <span>📍 {item.district}</span>

              <span>🏛 {item.assembly}</span>

            </div>

          </a>

        ))

      )}

    </div>

  );

}

export default PoliticalAlerts;