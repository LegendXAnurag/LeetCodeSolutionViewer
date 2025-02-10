import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css"
export default function SearchBar({query,setQuery}){
  const navigate = useNavigate();
  const handleEnter = (e)=> {
    if(e.key=="Enter"){
      navigate('/search');
    }
  }
  return(<>
    <div className=" w-[90vw] mt-5 ">
      <div className="relative flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-6 h-6 top-5.5 left-2.5 text-slate-600">
      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
      </svg>
    
      <input
      className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm ${styles["text-sm-modified"]} border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
      placeholder="Question Name"
      value={query}
      onChange={(e) => {setQuery(e.target.value); console.log(query)}}
      onKeyDown={(e)=>handleEnter(e)}
      />
    <button className={styles["button-49"]} onClick={()=>navigate('/search')}>Search</button>
  </div>
</div>
  </>)
}

