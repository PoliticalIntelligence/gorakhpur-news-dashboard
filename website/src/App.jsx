import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import NewsCard from "./components/NewsCard";
import Stats from "./components/Stats";
import Sidebar from "./components/Sidebar";

function App() {
  const [news, setNews] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  const [filters, setFilters] = useState({
    date: "latest",
    district: "All Districts",
    assembly: "All Assemblies",
    search: "",
  });

  // Load available dates
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/index.json`)
      .then((res) => res.json())
      .then((data) => setAvailableDates(data))
      .catch((err) => console.error(err));
  }, []);

  // Load news whenever date changes
  useEffect(() => {
    const file =
      filters.date === "latest"
        ? "data/latest.json"
        : `data/history/${filters.date}.json`;

    fetch(`${import.meta.env.BASE_URL}${file}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          setNews(data.articles || []);
        }
      })
      .catch((err) => console.error(err));
  }, [filters.date]);

  // Apply filters
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const districtMatch =
        filters.district === "All Districts" ||
        item.district === filters.district;

      const assemblyMatch =
        filters.assembly === "All Assemblies" ||
        item.assembly === filters.assembly;

      const search = filters.search.toLowerCase();

      const searchMatch =
        search === "" ||
        item.headline?.toLowerCase().includes(search) ||
        item.summary?.toLowerCase().includes(search) ||
        item.district?.toLowerCase().includes(search) ||
        item.assembly?.toLowerCase().includes(search);

      return districtMatch && assemblyMatch && searchMatch;
    });
  }, [news, filters]);

  // Dynamic Assembly Dropdown
  const assemblies = useMemo(() => {
    const filtered =
      filters.district === "All Districts"
        ? news
        : news.filter(
            (item) => item.district === filters.district
          );

    return [
      "All Assemblies",
      ...new Set(filtered.map((item) => item.assembly).filter(Boolean)),
    ];
  }, [news, filters.district]);

  return (
    <div className="app">
      <Header />

      <main className="content">

        <Filters
          filters={filters}
          setFilters={setFilters}
          availableDates={availableDates}
          assemblies={assemblies}
        />

        <Stats news={filteredNews} />

        <div className="dashboard-layout">

          <Sidebar news={filteredNews} />

          <div className="news-section">

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

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;