import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/clike/clike";
import "codemirror/addon/edit/closebrackets";
import axios from "axios";
export default function Cpp() {
  const [code, setCode] = useState("// Type C/C++ code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (editor, data, value) => {
    setCode(value);
  };
  const handleCppinputChange = (e) => {
    setInput(e.target.value);
  };

  const compileCodes = async () => {
    const requestData = {
      code: code,
      input: input,
    };

    try {
      const fetchdata = await axios.post(
        "http://localhost:4000/compile/cpp",
        requestData
      );
      const getData = fetchdata.data;
      const output = getData.output;
      setOutput(output);
      console.log(data);
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
            mode: "text/x-c++src",
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
            id=""
            rows="7"
            placeholder="write input"
            onChange={handleCppinputChange}
            className="p-[5px] outline-none rounded mt-[5px]"
          ></textarea>
        </div>
        <div className="flex flex-col p-[8px] rounded]">
          <h1 className="text-[#fff] text-[20px] font-semibold">Output</h1>
          <textarea
            name="output"
            value={output}
            id=""
            rows="7"
            placeholder="Show output"
            readOnly
            className="p-[5px] outline-none rounded mt-[5px]"
          ></textarea>
        </div>
        <div className="flex justify-center items-center mt-[12px] mb-[8px]">
          <button onClick={compileCodes} className="site_btn px-[60px]">
            Run
          </button>
        </div>
      </div>
 
    </>
  );
}
