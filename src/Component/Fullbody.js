import React, { useState } from "react";

export default function Fullbody() {
  const [data, setdata] = useState("");

  const upperCase = () => {
    let uc = data.toUpperCase();
    setdata(uc);
  };
  const lowerCase = () => {
    let lc = data.toLowerCase();
    setdata(lc);
  };
  const removeSpace = () => {
    let rspace = data.replace(/\s/g, "");
    setdata(rspace);
  };
  const removeEspace = () => {
    let respace = data.replace(/\s+/g, " ");
    setdata(respace);
  };
  const camelCase = () => {
    let datacc = data
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");

    setdata(datacc);
  };
  const removeSymbol = () => {
    let rsymbol = data.replace(/[^a-zA-Z0-9 ]/g, "");
    setdata(rsymbol);
  };
  const changeData = (e) => {
    setdata(e.target.value);
  };
  const clearScreen = () => {
    setdata("");
  };
  const copyClipboard = () => {
    navigator.clipboard.writeText(data);
  };
  return (
    <>
      <div className="content">
        <div className="mainArea">
          <label className="form-label">
            <b>Enter Text bellow for Modification:</b>
          </label>
          <textarea
            value={data}
            onChange={changeData}
            name="userData"
            className="form-control textArea"
            cols="30"
            rows="6"
          ></textarea>
          <div className="container-fluid buttons0">
        <button className="btn btn-primary my-1 mx-2" onClick={copyClipboard}>
          Copy Text
        </button>
        <button className="btn btn-primary my-1" onClick={clearScreen}>
          Clear
        </button>
      </div>
        </div>
      </div>
      <div className="container convertText">
        <h5>Convert yout text into . . .</h5>
      </div>
      <div className="container row buttons1">
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={upperCase}>
            UpperCase
          </button></div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={lowerCase}>
            LowerCase
          </button></div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={removeSpace}>
            Remove all Space
          </button></div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={removeEspace}>
            Remove Extra Spaces
          </button></div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={camelCase}>
            CamelCase
          </button></div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6 btndiv"><button className="btn btn-primary my-3 mx-1" onClick={removeSymbol}>
            Remove Symbols
          </button></div>
      </div>
    </>
  );
}