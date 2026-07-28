import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import Sidebar from "./components/Sidebar";
import NewsCard from "./components/NewsCard";

function App() {

  const [news, setNews] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");

  useEffect(() => {

    fetch("/data/latest.json")
      .then((res) => res.json())
      .then((data) => setNews(data));

  }, []);

  const filteredNews =
    selectedDistrict === "All Districts"
      ? news
      : news.filter(
          (item) => item.district === selectedDistrict
        );

  return (

    <div className="app">

      <Header />

      <div className="dashboard">

        <Sidebar
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
        />

        <main className="content">

          <Filters
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
          />

          <h2 className="section-title">
            Latest News ({filteredNews.length})
          </h2>

          <div className="news-grid">

            {filteredNews.map((item, index) => (

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