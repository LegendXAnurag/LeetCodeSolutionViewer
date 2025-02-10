import { useState, useEffect } from 'react'
import HomeScreen from './components/HomeScreen.jsx'
import SearchPage from './components/SearchPage.jsx'
import './App.css'
import SolutionScreen from './components/SolutionScreen.jsx'
import { Route, Routes } from 'react-router-dom'
import axios from "axios";
let data="";
const url = "https://raw.githubusercontent.com/haoel/leetcode/master/README.md";
let questions = [];

axios.get(url)
  .then((response) => {
    data = response.data; 
    const regex = /\|(\d+)\|\[(.*?)\]\(.*?\)\s*\|\s*((?:\[(.*?)\]\(.*?\),?\s*)*)\|\s*(\w+)\|/g;

    let match;
    
    while ((match = regex.exec(data)) !== null) {
      let i=0;
      let languages = match[3]
        ? match[3].match(/\[(.*?)\]/g)?.map(lang => {
          i++;
          return lang.replace(/\[|\]/g, "")}) || []
        : []; // Handles cases where no language is listed

      questions.push({
        questionNumber: match[1],
        questionTitle: match[2],
        solutionLanguages: languages,
        difficulty: match.at(-1)
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

function App() {

  const [query,setQuery] = useState("")
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeScreen query={query} setQuery={setQuery} questions={questions}/>}/>
      <Route path="/solution" element={<SolutionScreen  query={query} setQuery={setQuery}/>}/>
      <Route path="/search" element={<SearchPage query={query} setQuery={setQuery} questions={questions}/>}/>
    </Routes>
    </>
  )
}

export default App
