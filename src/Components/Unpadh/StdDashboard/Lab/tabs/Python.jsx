import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/python/python";
import "codemirror/addon/edit/closebrackets";
import axios from "axios";

export default function Python() {
  const [code, setCode] = useState("// Type python code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const compileCode = async () => {
    const requestData = {
      code: code,
      input: input,
    };

    try {
      const fetchdata = await axios.post(
        "http://localhost:4000/compile/python",
        requestData
      );
      const getData = fetchdata.data;
      const output = getData.output;
      setOutput(output);
      // console.log("output data", output);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
        <div className="col-span-2 editor-container">
          <CodeMirror
            value={code}
            options={{
              mode: "text/x-python",
              theme: "dracula",
              lineNumbers: true,
              autoCloseBrackets: true,
            }}
            onBeforeChange={handleChange}
          />
        </div>
        <div className="col-span-1 bg-[#000000c2] rounded">
          <div className="flex flex-col p-[8px] rounded">
            <h1 className="text-[#fff] text-[20px] font-semibold">Input</h1>
            <textarea
              name="input"
              value={input}
              onChange={handleInputChange}
              id=""
              rows="7"
            placeholder="write input"
            className="p-[5px] outline-none rounded mt-[5px]"
            ></textarea>
          </div>
          <div className="flex flex-col p-[8px] rounded">
            <h1 className="text-[#fff] text-[20px] font-semibold">Output</h1>
            <textarea
              value={output}
              name="output"
              id="" 
              rows="7"
              placeholder="Show output"
            readOnly
            className="p-[5px] outline-none rounded mt-[5px]"
            ></textarea>
          </div>
          <div className="flex justify-center items-center mt-[12px] mb-[8px]">
            <button onClick={compileCode} className="site_btn px-[60px]">Run</button>
          </div>
        </div>
    </>
  );
}
