
export default function QSide({ qTitle, qno, question, difficulty }) {
  const color={
    "Easy" : "text-green-500",
    "Medium" : "text-yellow-500",
    "Hard" : "text-red-500"
  }
  if(question==="") question="Question not available";

  question = question.replace(/^\/\/ /,"");
  question = question.replace(/\n\/\/ /g,"\n");
  question = question.replace(/\/\*+/g,"");
  question = question.replace(/\n *\* /g,"\n");
  return (
    <div className="w-[30vw] h-[80vh] overflow-y-auto overflow-x-hidden p-4 bg-white border border-gray-300 rounded-lg shadow-md">
  <pre className="whitespace-pre-wrap break-words text-gray-800 text-lg leading-relaxed">
    <p className="font-bold text-2xl text-blue-600 pb-2">{qno}. {qTitle}</p>
    <p className={`${color[difficulty]} font-bold`}>{difficulty}</p>
    <p className="mt-2 text-start text-base leading-tight">{question}</p>
  </pre>
</div>

  );
}
