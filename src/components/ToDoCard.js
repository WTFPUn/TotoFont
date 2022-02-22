import axios from "axios";
import CloseIcon from "./Icons/CloseIcon";

export default function ToDoCard({id, custom, title, description}) {
  const handleClick = () => {
    if(id !== 0) {
      axios.delete(`http://localhost:7777/removeStat/${id}`)
            .then((res) => {console.log("res")})
            .catch((error) => {console.log(error);});
    }
  }

    return (
    <div id={id} className={[custom, "border-2","h-32", "mt-4", "shrink-0 overflow-y-auto rounded-lg bg-[#70767c44] relative"].join(" ")}>
      <div onClick={handleClick} className="absolute right-4 top-2">
        <CloseIcon/>
      </div>
      
      <div className=" border-l-4 border-gray-500 ml-4 mt-4 text-base font-semibold pl-2 bg-transparant">{title}</div>
      <p className=" ml-4 mt-1 text-base pl-2 text-left shrink-0 overflow-auto">{description}</p>
    </div>
  )
}