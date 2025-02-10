import { useState,useEffect } from "react";
import SearchedItem from "./SearchedItem"
import { useNavigate } from "react-router-dom";
import Suggestedtem from "./SuggestedItem";

export default function Suggestions({query,questions}){
  let filtered;
  if(query=="") filtered=questions;
  filtered = questions.filter(question => question.questionNumber.includes(query) 
                            || question.questionTitle.toLowerCase().includes(query.toLowerCase()))
  if(filtered.length==0){
    return(
    <div className="text-[22px] font-bold text-red-600 pt-5">
      No such question exists
    </div>)
  }
  return (
    <>
      <div className="w-full rounded-lg shadow-xl shadow-gray-400 flex flex-col items-center max-h-[35vh] overflow-y-auto overflow-x-hidden my-4">
          {
          filtered.map((e,i)=> (
            <Suggestedtem qno={e.questionNumber} qTitle={e.questionTitle} lang={e.solutionLanguages} difficulty={e.difficulty} i={i}/>
          ))
        }     
      </div>
    </>
  );
}