import "./App.css";

import Header from "./components/Header";
import Filters from "./components/Filters";
import TopStory from "./components/TopStory";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <div className="container">

      <Header />

      <Filters />

      <TopStory />

      <h2 className="section-title">Latest News</h2>

      <NewsCard />
      <NewsCard />
      <NewsCard />

    </div>
  );
}

export default App;