import { useState } from "react";
import { RadioGroup } from '@headlessui/react'
import ToDoCard from "./ToDoCard";
import axios from "axios";

export default function Addlist() {

  const [name, setName] = useState("");
  const [description, setDesription] = useState("")
  const [optional, setOptional] = useState(true);
  const [customcolor, setCustomColor] = useState("");
  const [forceUpdate, setForceUpdate] = useState(0);
  const [dueDate, setDueDate] = useState("")
  

  
  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('http://localhost:7777/addCardStat', {
      'id': Date.now(),
      'customcolor': customcolor,
      'name': name,
      'description': description,
      'fav': 0,
      'dueDate': dueDate,
    })
    .catch((error) => {
      console.log(error);
      setForceUpdate(forceUpdate === 0 ? 1 : 0);
    });
  }

  const showOp = () => {
    if (optional) {
      setOptional(false);
    } else if (!optional) {
      setOptional(true);
    }
  };
  

  const checkOp = (textT, textF) => {
    if (optional) {
      return textT;
    } else {
      return textF;
    }
  };
  return (
    <div className="flex flex-col w-3/5 h-full px-8 flex-nowrap overflow-auto border-r-4 my-8">
      <form className="text-base flex flex-col flex-nowrap" onSubmit={handleSubmit}>
        <label className="text-slate-100 mb-2">List Name</label>
        <input
          className="text-black mb-4 h-8 rounded-md "
          type="text"
          name="ListName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="28"
          required
        />
        <div onClick={() => showOp()}>
          {checkOp("▲ description (optional)", "▼ description (optional)")}
        </div>
        <div>
          <textarea
            className={[
              "text-black",
              checkOp("hidden", "visible"),
              "w-full",
              "rounded-md",
            ].join(" ")}
            name="ListDescription"
            value={description}
            onChange={(e) => setDesription(e.target.value)}
          />
        </div>
        <RadioGroup value={customcolor} onChange={setCustomColor} className="flex flex-row">
      <RadioGroup.Label>Border Color: </RadioGroup.Label>
      <RadioGroup.Option value="border-red-600" className="border-2 bg-transparent w-1/3 border-red-600 rounded-md focus:bg-red-600 ml-4 text-center h-max">
        Red
      </RadioGroup.Option>
      <RadioGroup.Option value="border-green-500" className="border-2 bg-transparent w-1/3 border-green-500 rounded-md focus:bg-green-500 ml-4 text-center h-max">
        green
      </RadioGroup.Option>
      <RadioGroup.Option value="border-blue-500" className="border-2 bg-transparent w-1/3 border-blue-500 rounded-md focus:bg-blue-500 ml-4 text-center h-max">
        Blue
      </RadioGroup.Option>
    </RadioGroup>
    <div className="flex flex-row">
      <input className="text-black rounded-md mt-4 mr-2 w-2/5" value={dueDate} onChange={(e) => {setDueDate(e.target.value)}} type="date"/>
      <button className="border-2 border-[#3BD16F] bg-transparent text-[#3BD16F] hover:bg-[#3BD16F] hover:text-white text-lg mt-4 ml-auto w-1/3" >+ Add</button>
    </div>
      </form>
      <div className="text-base font-semibold mt-4">Example</div>
      <div className="flex flex-col flex-nowrap justify-items-center overflow-x-auto gap-1 scroll-smooth">
        <ToDoCard id={0} custom={customcolor} title={name} description={description} dueDate={dueDate}/>
      </div>
    </div>
  );
}
