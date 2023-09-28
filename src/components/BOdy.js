import React, { useState, useEffect } from "react";

const BOdy = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    let timeoutId;
    const updateOutput = () => {
      setOutput(input);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateOutput, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [input]);

  return (
    <div className=" flex items-center justify-center gap-4 w-full h-screen bg-gray-950 text-white text-[13px]">
      {/* <div className="flex gap-4 items-center justify-center"> */}
      <div className="flex flex-col items-center justify-center gap-4 bg-[#0b101f] w-4/12 h-4/6 rounded-lg border-2 border-slate-700">
        <div className="flex flex-col w-9/12 ">
          <label className="mb-1">Select Asset</label>
          <select className="bg-transparent border-2 border-slate-700 rounded-md">
            <option className="text-black" value="ETH">
              ETH
            </option>
            <option className="text-black" value="Dummy option">
              Dummy option1
            </option>
            <option className="text-black" value="Dummy option">
              Dummy option2
            </option>
          </select>
        </div>
        <div className="flex flex-col w-9/12">
          {/* <div className="flex flex-col "> */}
          <div className="flex justify-between mb-1">
            <div className="mb-1">Borrow amount</div>
            <div className="border-2 border-slate-700 rounded-md p-[2px] bg-gray-800">
              Maxhold amount: 200
            </div>
          </div>
          <input
            className="bg-transparent border-2 border-slate-700 rounded-md p-2"
            type="text"
            value={input}
            placeholder="Enter amount here"
            onChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="bg-[#050a17] w-9/12 h-1/6 rounded-lg"></div>
        <div className="w-9/12 flex justify-end">
          <div className="flex items-center justify-center w-20 h-10 bg-white text-black text-lg rounded-lg">
            <p>Execute</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-4/12 h-4/6">
        <div className="w-full h-[60%] border-2 border-slate-700 rounded-lg">
          <label className="m-4 text-xl">{output}</label>
        </div>
        <div className="w-full h-[35%] border-2 border-slate-700 rounded-lg"></div>
      </div>
    </div>
    // </div>
  );
};

export default BOdy;
