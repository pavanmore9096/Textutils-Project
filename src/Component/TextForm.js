import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextFrom(props) {

 const handleUpClick= ()=>{
    console.log("Upper click was clicked");
     const newtext = text.toUpperCase();
    
       setText(newtext);
       props.showAlert("Converted to upper case!","success")
  }
const handleLoClick= ()=>{
    console.log("Lower click was clicked");
     const newtext = text.toLowerCase();
    
       setText(newtext);
       props.showAlert("Converted to lower case!","success")
  }

  const handleClearText= ()=>{
    console.log("Clear Text was clicked");
     const newtext = '';
    
       setText(newtext);
       props.showAlert("Text was cleared!","success")
  }
  const handleonChange =(event) =>{
    console.log("on Change");
    setText(event.target.value)
  };
  const [text, setText] = useState('');

  return (
    
     <>
     <div className="container" style={{color:props.Mode==='dark'?'white':'black'}} >
     <h4>{props.heading}</h4>
     <div className="mb-3">
  
       <label htmlFor="Mybox" className="form-label"></label>
        <textarea className="form-control" value ={text} onChange={handleonChange} id="Mybox" rows="5" style={{backgroundColor: props.Mode==='dark'?'#3873a7':'white',color:props.Mode==='dark'?'white':'Black'}}></textarea>
     </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Upper Case</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lower Case</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText} >Clear Text</button>
    </div>
    

<div className="container my-4"  style={{color:props.Mode==='dark'?'white':'black'}}>
    <h4> Your text Summary </h4>
    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charater </p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minuts Reads</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something in Text Box to preview here"}</p>
</div>

</>
    
  )
}
