// import { useLocation, useNavigate } from "react-router-dom";

// export default function SearchedItem({ qno,qTitle,lang,difficulty,i}) {
//   const color={
//     "Easy" : "text-green-500",
//     "Medium" : "text-yellow-500",
//     "Hard" : "text-red-500"
//   }
//   const backCol={
//     0 : "#ffffff12",
//     1 : "#1a1a1a"
//   }
//   const problem = 
//     { id: qno, title: qTitle, difficulty: difficulty, }
//   const navigate=useNavigate();
//   const nav=(qno,qTitle,lang,difficulty)=>{
//     navigate('/solution',{state:{qno,qTitle,lang,difficulty}})
//   }

//   return (
//         <div
//           onClick={()=>nav(qno,qTitle, lang,difficulty)}
//           key={problem.id}
//           className={`rounded-lg shadow-lg flex w-[80vw] items-center ${i%2==0 ? "bg-[#9A7E6F]" : "bg-[#CBD2A4]"} justify-between p-4 `}>
//           <span className="text-black">{problem.id}</span>
//           <span className="flex-1">{problem.title}</span>
//           <span className={`${color[difficulty]} font-medium w-[60px] mr-5`}>{problem.difficulty}</span>
//           <div className="w-[128px] flex justify-center gap-2">
//             {lang.map((e,i)=>(
//               <span key={i}>{e}</span>
//             ))}
//           </div>
//         </div>
//     );
// }
import { useNavigate } from "react-router-dom";

export default function SearchedItem({ qno, qTitle, lang, difficulty, i }) {
  const color = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  };
  
  const navigate = useNavigate();
  const nav = () => navigate('/solution', { state: { qno, qTitle, lang, difficulty } });

  return (
    <div
      onClick={nav}
      className={`rounded-lg shadow-lg flex flex-col sm:flex-row w-full items-center ${
        i % 2 === 0 ? "bg-[#9A7E6F]" : "bg-[#CBD2A4]"
      } justify-between p-4 cursor-pointer transition hover:scale-105`}
    >
      <span className="text-black">{qno}</span>
      <span className="flex-1 text-center sm:text-left">{qTitle}</span>
      <span className={`${color[difficulty]} font-medium w-20`}>{difficulty}</span>
      <div className="flex justify-center gap-2 flex-wrap sm:flex-nowrap">
        {lang.map((e, i) => (
          <span key={i} className="text-sm bg-gray-200 px-2 py-1 rounded-md">{e}</span>
        ))}
      </div>
    </div>
  );
}
