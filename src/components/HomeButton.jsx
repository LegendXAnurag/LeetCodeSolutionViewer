import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <button className="flex items-center space-x-2 rounded px-4 py-2 mt-5"
    onClick={()=>navigate('/')}>
      <FaHome className="text-xl" size={30}/>
    </button>
  );
}

export default HomeButton;
