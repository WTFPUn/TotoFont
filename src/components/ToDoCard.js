import CloseIcon from "./Icons/CloseIcon";
import StarIcon from "./Icons/StarIcon";

export default function ToDoCard({id, custom, title, description, fav, dueDate}) {

  const today =  new Date();
  const setdueDate = new Date(dueDate);
  const checkLate = setdueDate.getTime() - today.getTime();
  
    return (
    <div id={id} className={[custom, "border-2","h-32", "mt-4", "shrink-0 overflow-y-auto rounded-lg bg-[#70767c44] relative"].join(" ")}>
      <div className="absolute right-4 top-2 flex flex-row">
          <div className={`text-sm flex flex-row w-1/8 bg-[#4e535844] rounded-md p-1 border-2 ${checkLate > 0 ? "border-[#383b3f44]" : "border-red-600"}`}>
            <p className="font-bold">Date: </p>
            <p className={`${checkLate > 0 ? "text-white" : "text-red-600 text-center"}`}>{dueDate}</p>
          </div>
          <StarIcon id={id} fav={fav}/>
          <CloseIcon id={id}/>
      </div>
      <div className=" border-l-4 border-gray-500 ml-4 mt-4 text-base font-semibold pl-2 bg-transparant">{title}</div>
      <p className=" ml-4 mt-1 text-base pl-2 text-left shrink-0 overflow-auto">{description}</p>
    </div>
  )
}