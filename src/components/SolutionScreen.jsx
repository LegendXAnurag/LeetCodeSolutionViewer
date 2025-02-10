
import { useLocation } from "react-router-dom";
import axios from "axios";
import QSide from "./QSide";
import SearchBar from "./SearchBar";
import SolutionSide from "./SolutionSide";
import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

function splitQuestionSolution(text) {
    let parts = text.split(/^\s*\*{10,}\/\s*$/m, 2);
    let question, solution;
    if (parts.length === 2) {
        question = parts[0]?.trim() || "";
        solution = parts[1]?.trim() || "";
    } else {
        question = "";
        solution = text;
    }
    return { question, solution };
}

export default function SolutionScreen({ query, setQuery }) {
    const de = useLocation();
    const { qno, lang, qTitle, difficulty } = de.state || {};

    let qFile = qTitle.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s+/g, '');
    let qFolder = qFile.replace(/^./, match => match.toLowerCase());

    const languages = {
        "C++": "cpp",
        "Java": "java",
        "Python": "python"
    };
    const extension = {
        "C++": ".cpp",
        "Java": ".java", 
        "Python": ".py"
    };

    // ⬇️ Use state to store question and solutions
    const [question, setQuestion] = useState("");
    const [solutions, setSolutions] = useState({});

    useEffect(() => {
        const fetchSolutions = async () => {
            let tempSolutions = {};
            let tempQuestion = "";

            // Store all promises in an array
            let promises = lang.map(async (element) => {
                let urls= [ `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/${qFolder}/${qFile + extension[element]}?ref=master`,
                 `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/${qFolder}/${qFolder + extension[element]}?ref=master`,
                 `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/${qFile}/${qFile + extension[element]}?ref=master`,
                 `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/${qFile}/${qFolder + extension[element]}?ref=master`]
                if (element === "Java") {
                    urls = [`https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/src/${qFolder}/${qFile + extension[element]}?ref=master`,
                    `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/src/${qFolder}/${qFolder + extension[element]}?ref=master`,
                    `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/src/${qFile}/${qFile + extension[element]}?ref=master`,
                    `https://api.github.com/repos/haoel/leetcode/contents/algorithms/${languages[element]}/src/${qFile}/${qFolder + extension[element]}?ref=master`]
                }
                for (let i = 0; i < urls.length; i++) {
                    const url = urls[i];   
                    try {
                        const response = await axios.get(url, {
                            headers: {
                                Authorization: `token ${GITHUB_TOKEN}`,
                            },
                        });
    
                        const temp = splitQuestionSolution(atob(response.data.content));
    
                        // Set question only if it's empty and solution exists
                        if (element === "C++" || (element === "Java" && tempQuestion === "")) {
                            if (temp.question !== "") {
                                tempQuestion = temp.question;
                            }
                        }
                        tempSolutions[element] = temp.solution;
                        break;
                    } catch (error) {
                        console.error("Error fetching:", error);
                        console.log("Not working url",url)
                    }
                }
            });

            await Promise.all(promises);

            // ⬇️ Update state after fetching all solutions
            setQuestion(tempQuestion);
            setSolutions(tempSolutions);
        };

        fetchSolutions();
    }, []); // Only run once on mount

    return (
        <div className="w-full flex flex-col h-[100vh] px-[2rem]">
            <div className="w-full flex justify-center items-center">
                <HomeButton/>
                <SearchBar query={query} setQuery={setQuery} />
            </div>

            <div className="flex-1 flex mt-[30px] justify-between ">
                <div>
                    <QSide qTitle={qTitle} qno={qno} question={question} difficulty={difficulty} />
                </div>
                {/* <div className="w-[0.5%] bg-black/60 max-h-[80vh]"></div> */}
                <div className="flex-1">
                    <SolutionSide solutions={solutions} />
                </div>
            </div>
        </div>
    );
}
