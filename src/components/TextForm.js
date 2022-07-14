import React,{useState} from 'react'

export default function TextForm(props) {
  // setText("")
  const [Text,setText] = useState("")
  const handleUpClick = ()=>{
    // console.log("Convert to uppercase")
    const newText = Text.toUpperCase()
    props.showAlert("Convert to Uppercase","success")
    setText(newText)
  }
  const handleLowClick = ()=>{
    // console.log("Convert to lowercase")
    const newText = Text.toLowerCase()
    props.showAlert("Convert to lower Case","success")
    setText(newText)
  }
  const RemoveExtraSpace = ()=>{
    // console.log("Remove extra space")
    const newText = Text.split(/[ ]+/)
    props.showAlert("Remove extra spaces","success")
    setText(newText.join(" "))
  }
  const ClearText = ()=>{
    // console.log("Convert to lowercase")
    props.showAlert("Clear Text","success")
    setText("")
  }
  const Copy = ()=>{
    // console.log("Convert to lowercase")
    props.showAlert("Copy text","success")
    navigator.clipboard.writeText(Text)
  }
  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  return (
    <>
    {/* <h1 className='text-center'>Enter Text to analyze</h1> */}
    <div className="container my-2"  >
        <div className="mb-3">
          <h3 htmlFor="exampleInputPassword1" className="form-label">Enter your Text:</h3>
          <textarea type="text" className="form-control" id="name" value={Text} style={{ backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={Copy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
    </div>
    <div class="container  my-2" >
      <h2>Yout text summary</h2>
      <p>{Text.length>0?Text.split(" ").length:"0"} words</p>
      <p>{Text.trim().length } characters</p>
      <p>{Text.length>0?0.008*Text.split(" ").length:"0 " } minutes to read</p>
      <h3>Preview:</h3>
      <p>{Text.length>0?Text:"Enter some text to preview!"}</p>
    </div>
    </>
  )
}
