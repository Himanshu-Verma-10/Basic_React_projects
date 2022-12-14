import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case","success");
    }

    const handleCapClick=()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted in to capitialize ","success");
    }

    const handleClrClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear screen","success");
           
        }

        const handleRevClick=()=>{
            let newText = text.split("").reverse().join("");
            setText(newText)
            props.showAlert("Converted to Reverse case","success");
               
            }

            

    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
        
    }

    const handleCopyClick=(event)=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success");
    }

    
    const [text, setText] = useState('');
    //setText=("new text"); 
  return (
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={ {backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Convert to Capitializedcase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length } Minutes read </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter somethig in the text box to preview it here"}</p>
</div>
</>

  )
}
