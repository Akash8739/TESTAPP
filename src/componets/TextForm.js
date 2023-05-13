import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  

  const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const handleclearClick = ()=>{
    
    let newtext = '';
    setText(newtext)
  }
  const handleGenerateClick = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
  };


  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
   
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
      
      <h1>{props.heading}</h1>
    <div className="form-group">
      
      <textarea className = "form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{background:props.mode ==='light'?'white':'#8496ab', color:props.mode ==='dark'?'white':'#042743'}} ></textarea>

    </div>
  <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>convert to uppercase</button>
  <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>convert to Lowercase</button>
  <button className='btn btn-primary mx-2 my-2' onClick={handleclearClick}>clear all</button>
  <button className='btn btn-primary mx-2 my-2' onClick={handleGenerateClick}>reverse text</button>
  
      </div>
      <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length!=0}).length} word and{text.length} characters </p>
        <p> {0.008 * text.length} minutes read </p>
        <h1>preview</h1>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
      </>
  )
}
