import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import Footer from './components/footer/Footer';
import Navinshorts from './components/Navinshorts'
import NewsContent from './components/newscontent/NewsContent';
import './App.css';

const Setcatg = createContext();
const Setaray = createContext();

const App = () => {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState("");
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log("my api error is" + error);
    }
  }

  useEffect(() => {
    newsApi();// eslint-disable-next-line
  },[newsResults,category,loadMore]);
  
  return (
    <>
      <Setcatg.Provider value={setCategory}>
        <Navinshorts />
      </Setcatg.Provider>
      <Setaray.Provider value={newsArray}>
        <NewsContent loadMore={loadMore} setLoadMore={setLoadMore} newsResults={newsResults} />
      </Setaray.Provider>
      <Footer />
    </>
  )
}

export default App
export { Setcatg, Setaray };