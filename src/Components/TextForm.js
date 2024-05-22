import React, { useState } from 'react'

export default function TextForm(props) {
    const UpperCaseClick = ()=>{
        // console.log("Upper Case Button Was Clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", "success");
    }

    const LowerCaseClick = ()=>{
        // console.log("Lower Case Button Was Clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase", "success");
    }

       const handleOnChange = (event)=>{
        // console.log("ON change .");
        setText(event.target.value);
    }

    const ClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Successfully", "success");
    }

    const CopyText =()=>{
        var text = document.getElementById("MyTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const RemoveExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");
    }



    const[text,setText] = useState("")
    //text = "NEW TEXT";//Wrong method to update the text ......
    //Correect Method to update the text is using the 2nd parameter which is the function i.e. setText
    //setText("NEW TEXT");
    return (  
        <>
<div className="container" style = {{color:props.mode === 'dark' ? 'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">  
      <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor:props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white':'black'}}id="MyTextBox" rows="7"></textarea>
    </div>
    <button className="btn btn-dark mx-1" onClick={UpperCaseClick}>Make UpperCase</button>
    <button className="btn btn-dark mx-1" onClick={LowerCaseClick}>Make LowerCase</button>
    <button className="btn btn-dark mx-1" onClick={ClearText}>Clear Text</button>
    <button className="btn btn-dark mx-1" onClick={CopyText}>Copy Text</button>
    <button className="btn btn-dark mx-1" onClick={RemoveExtraSpace}>Remove Extra Space</button>
   
</div> 
<div className="container my-3" style = {{color:props.mode === 'dark' ? 'white':'black'}}>
<h3>    Your Text Summary    </h3>
{/* <p> {text.split(" ").length} Words </p> */}  
<p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>

{/* <p> {text.length}characters </p> */}
<p>{text.trim().length } characters</p>
</div>
</>
    )
}
