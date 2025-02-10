import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";

export default function SolutionSide({ solutions }) {
  const languages = Object.keys(solutions);
  let [selectedLang, setSelectedLang] = useState("plaintext");

  useEffect(() => {
    if (languages.length > 0) {
      setSelectedLang(languages[0]);
    }
  }, [solutions]);

  const lang = {
    "C++": "cpp",
    Java: "java",
    Python: "python",
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedLang, solutions]);

  return (
    <div
      className="w-full md:w-[65vw] h-auto md:h-[80vh] overflow-y-auto overflow-x-auto px-2 
      relative flex flex-col"
    >
      {/* Language Selector */}
      <div className="flex justify-end w-full p-2 absolute top-3 right-8">
        {languages.length > 0 && (
          <select
            className="bg-[#cd6e20] text-white px-2 py-1 text-xs rounded cursor-pointer"
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

      {/* Code Block */}
      <pre
        className="w-full md:w-[65vw] m-0 text-start whitespace-pre-wrap 
        break-words overflow-x-auto p-3 rounded-md bg-black/90 flex-1"
      >
        <code className={`language-${lang[selectedLang]} block`}>
          {solutions[selectedLang] || "No solution available"}
        </code>
      </pre>
    </div>
  );
}
