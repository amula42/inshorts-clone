import React, { createContext, useState } from 'react'
import Footer from './components/footer/Footer';
import Navinshorts from './components/Navinshorts'
import NewsContent from './components/newscontent/NewsContent';

const Setcatg = createContext();

const App = () => {

  const [category, setCategory] = useState("general");

  console.log(category);
  
  return (
    <>
      <Setcatg.Provider value={setCategory}>
        <Navinshorts />
      </Setcatg.Provider>
      <NewsContent />
      <Footer />
    </>
  )
}

export default App
export { Setcatg };