import HomeButton from "./HomeButton";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchPage({query,setQuery,questions}){
  return(<div className="flex flex-col items-center gap-10">
 <div className="w-full flex justify-center items-center">
                <HomeButton/>
                <SearchBar query={query} setQuery={setQuery} />
            </div>
  <SearchResults query={query} questions={questions}/>
  </div>)
}