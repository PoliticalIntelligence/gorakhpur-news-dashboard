import "./NewsCard.css";

function NewsCard({ news }) {
  return (
    <article
      className="news-card"
      onClick={() => window.open(news.url, "_blank")}
    >
      {/* Image */}
      <div className="news-image">
        <img
          src={
            news.thumbnail && news.thumbnail !== ""
              ? news.thumbnail
              : "https://placehold.co/600x400?text=No+Image"
          }
          alt={news.headline}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="news-content">

        {/* Category + Date */}
        <div className="card-top">
          <span className="topic-badge">
            {news.category || "General"}
          </span>

          <span className="news-date">
            {news.scrape_date || ""}
          </span>
        </div>

        {/* Headline */}
        <h3>
          {news.headline}
        </h3>

        {/* Summary */}
        <p>
          {news.summary || "No summary available."}
        </p>

        {/* Meta */}
        <div className="news-meta">
          <span>
            📍 {news.district}
          </span>

          <span>
            🏛 {news.assembly}
          </span>
        </div>

        {/* Read More */}
        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          Read Full Article →
        </a>

      </div>
    </article>
  );
}

export default NewsCard;