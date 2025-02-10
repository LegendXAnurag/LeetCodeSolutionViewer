import { useLocation, useNavigate } from "react-router-dom";

export default function Suggestedtem({ qno,qTitle,lang,difficulty,i}) {
  const navigate=useNavigate();
  const nav=(qno,qTitle,lang,difficulty)=>{
    navigate('/solution',{state:{qno,qTitle,lang,difficulty}})
  }

  return (
        <div
          onClick={()=>nav(qno,qTitle, lang,difficulty)}
          key={qno}
          className={`z-10 flex items-center justify-between p-2`}>
          <span className="flex-1">{qTitle}</span>
        </div>
    );
}
