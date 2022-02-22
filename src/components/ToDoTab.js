import axios from "axios";
import { useEffect, useState } from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoTab() {
  const [cardStat, setCardStat] = useState([]);
  useEffect(() => axios.get('http://localhost:7777/CardStat').then(res => setCardStat(res.data)).catch(error => console.log(error)));
  const reverseCard = cardStat.slice(0).reverse();
  return(
    <div className="w-full h-full mx-8 mt-4 overflow-y-hidden">
      <div className="text-center font-semibold text-3xl">Your List</div>
      <div className="flex flex-col overflow-y-auto w-full h-full flex-shrink-0 my-8">
        {reverseCard.map((e) => {return <ToDoCard key={e.id} id={e.id} custom={e.customcolor} title={e.name} description={e.description}/>})}
      </div>
      
    </div>
  )
}
// cardStat.map(e => {return (<ToDoCard id={e.id} custom={e.custom} title={e.name} description={e.description}/>)})