import React,{useState} from 'react'

export default function About(props) {

    

        //const[myStyle,setMyStyle]=useState( {
        //    color:'black',
        //    backgroundColor:'white',
           
        //})
        let myStyle={
          color:props.mode === 'dark'?'white':'#042743',
          backgroundColor:props.mode === 'dark'?'#042743':'white',
          border:'2px solid',
          borderColor:props.mode === 'dark'?'#042743':'white'
        }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils helps you to analyze your text.</strong> With the help of TextUtils you can analyze your text. And you can also convert your text into different forms like convert into upper case, lower case,reverse the text,count your text etc.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is free of cost</strong> TectUtils is free to use.Anyone can use the TextUtils.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is compatible with browser</strong> You can use Textutils in any browser
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
