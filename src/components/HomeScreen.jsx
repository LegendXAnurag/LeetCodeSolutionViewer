import PageTitle from "./PageTitle.jsx"
import SearchBar from "./SearchBar"
import Suggestions from "./Suggestions.jsx"
export default function HomeScreen({query,setQuery, questions}){
  return(
    <>
      <div className="home h-screen flex flex-col justify-center items-center">
      <div className=""/><PageTitle />
      <SearchBar query={query} setQuery={setQuery}/>
      <div className="h-[35vh] w-[80vw] md:w-[35vw]">        

      {query && <Suggestions query={query} questions={questions}/>}
      </div>
      </div>
    </>
  )
}

