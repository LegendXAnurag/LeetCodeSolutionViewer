import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
export default function SolutionSide({ solutions }) {
  const languages = Object.keys(solutions); // Get available languages
  let [selectedLang, setSelectedLang] = useState("plaintext"); // Default to plaintext initially
  // Update selectedLang when languages change
  useEffect(() => {
    if (languages.length > 0) {
      setSelectedLang(languages[0]); // Set first available language
    }
  }, [solutions]); // Runs when solutions change
  const lang = {
    "C++": "cpp",
    "Java": "java",
    "Python": "python"
  };
  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting when language or solution changes
  }, [selectedLang, solutions]);

  // return (
  //   <div className=" w-full h-[80vh]  overflow-y-auto  overflow-x-auto px-2 relative">
  //     {/* Code Block Container */}
  //     <pre className="w-[65vw] m-0 items-start relative text-start whitespace-pre-wrap break-words overflow-x-auto  p-3 rounded-md bg-black/90 h-[100%]">
        
  //       {/* Language Toggle Button */}
  //       <div className="">
  //       {languages.length > 0 && (
  //         <select
  //           className="absolute top-2 left-[63vw] bg-[#208AAE] text-white px-2 py-1 text-xs rounded cursor-pointer"
  //           value={selectedLang}
  //           onChange={(e) => setSelectedLang(e.target.value)}
  //         >
  //           {languages.map((lang) => (
  //             <option key={lang} value={lang}>
  //               {lang}
  //             </option>
  //           ))}
  //         </select>
  //       )}</div>

  //       {/* Code Block */}
  //       <code className={`language-${selectedLang} block`}>
  //         {solutions[selectedLang] || "No solution available"}
  //       </code>
  //     </pre>
  //   </div>
  // );
  return (
    <div className="w-full h-[80vh] overflow-y-auto overflow-x-auto px-2 relative flex flex-col">
      {/* Top Bar for Toggle Button */}
      <div className="flex justify-end w-full p-2 absolute top-3 right-8">
        {languages.length > 0 && (
          <select
            className="bg-[#cd6e20] text-white px-2 py-1 text-xs rounded cursor-pointer shrink-0"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        )}
      </div>
  
      {/* Code Block Container */}
      <pre className="w-[65vw] m-0 text-start whitespace-pre-wrap break-words overflow-x-auto p-3 rounded-md bg-black/90 flex-1">
        {/* Code Block */}
        <code className={`language-${lang[selectedLang]} block`}>
          {solutions[selectedLang] || "No solution available"}
        </code>
      </pre>
    </div>
  );
  
}
