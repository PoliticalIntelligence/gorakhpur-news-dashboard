import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar";
import NewsCard from "./components/NewsCard";

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    fetch("/data/latest.json")
      .then((res) => res.json())
      .then((data) => setNews(data));

  }, []);

  return (

    <div className="app">

      <Header />

      <div className="dashboard">

        <Sidebar />

        <main className="content">

          <Filters />

          <h2 className="section-title">
            Latest News ({news.length})
          </h2>

          <div className="news-grid">

            {news.map((item, index) => (

              <NewsCard
                key={index}
                news={item}
              />

            ))}

          </div>

        </main>

      </div>

    </div>

  );

}

export default App;