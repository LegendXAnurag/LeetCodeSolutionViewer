// import SearchedItem from "./SearchedItem"
// export default function SearchResults({query,questions}){
//   let filtered;
//   if(query=="") filtered=questions;
//   filtered = questions.filter(question => question.questionNumber.includes(query) 
//                             || question.questionTitle.toLowerCase().includes(query.toLowerCase()))
//   console.log(filtered);
//   if(filtered.length==0){
//     return(<div className="text-[22px] font-bold text-red-600 pt-5">
//     No such question exists
//     </div>)
//   }
//   return (
//     <>
//       <div className="flex flex-col items-center">
//           {
//           filtered.map((e,i)=> (
//             // <p>asdfgas</p>
//             <SearchedItem qno={e.questionNumber} qTitle={e.questionTitle} lang={e.solutionLanguages} difficulty={e.difficulty} i={i}/>
//           ))
//         }
//       </div>
//     </>
//   );
// }
import SearchedItem from "./SearchedItem";

export default function SearchResults({ query, questions }) {
  let filtered = query === "" ? questions : questions.filter(
    (question) =>
      question.questionNumber.includes(query) ||
      question.questionTitle.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    return (
      <div className="text-lg font-bold text-red-600 pt-5 text-center">
        No such question exists
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-0 md:w-[80vw]">
      {filtered.map((e, i) => (
        <SearchedItem
          key={e.questionNumber}
          qno={e.questionNumber}
          qTitle={e.questionTitle}
          lang={e.solutionLanguages}
          difficulty={e.difficulty}
          i={i}
        />
      ))}
    </div>
  );
}
