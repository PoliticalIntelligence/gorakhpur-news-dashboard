import "./NewsCard.css";

function NewsCard({ news }) {

  return (

    <div className="news-card">

      <div className="news-image">

        <img
          src={
            news.thumbnail && news.thumbnail !== ""
              ? news.thumbnail
              : "https://placehold.co/300x220?text=No+Image"
          }
          alt={news.headline}
        />

      </div>

      <div className="news-content">

        <span className="topic-badge">
          {news.category}
        </span>

        <h3>
          {news.headline}
        </h3>

        <p>
          {news.summary}
        </p>

        <div className="news-meta">

          <span>📍 {news.district}</span>

          <span>🏛 {news.assembly}</span>

        </div>

        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
        >
          Read Full Article →
        </a>

      </div>

    </div>

  );

}

export default NewsCard;