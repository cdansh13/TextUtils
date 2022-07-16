import React,{useState} from 'react'

export default function TextForm(props) {
  // setText("")
  const [Text,setText] = useState("")
  const handleUpClick = ()=>{
    // console.log("Convert to uppercase")
    if (Text.length>0){
      const newText = Text.toUpperCase()

      props.showAlert("Convert to Uppercase","success")
      setText(newText)
    }
    else{
      props.showAlert("No text","danger")
    }
  }
  const handleLowClick = ()=>{
    // console.log("Convert to lowercase")
    if (Text.length>0){

      const newText = Text.toLowerCase()
      props.showAlert("Convert to lower Case","success")
      setText(newText)
    }
    else{
      props.showAlert("No text","danger")
    }
  }
  const RemoveExtraSpace = ()=>{
    // console.log("Remove extra space")
    if (Text.length>0){

      const newText = Text.split(/[ ]+/)
      props.showAlert("Remove extra spaces","success")
      setText(newText.join(" "))
    }
    else{
      props.showAlert("No text","danger")
    }
  }
  const ClearText = ()=>{
    // console.log("Convert to lowercase")
    if  (Text.length>0){

      props.showAlert("Clear Text","success")
      setText("")
    }
    else{
      props.showAlert("No text","danger")
    }
  }
  const Copy = ()=>{
    // console.log("Convert to lowercase")
    if (Text.length>0){
      
      props.showAlert("Copy text","success")
      navigator.clipboard.writeText(Text)
    }
    else{
      props.showAlert("No text","danger")
    }
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
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-2 " onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-2" onClick={Copy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={ClearText}>Clear Text</button>
    </div>
    <hr />
    <div className="container  my-2" >
      <p>{Text.split(/\s+/).filter((element)=>{
        return element.length!==0
      }).length} words</p>
      <p>{Text.trim().length } characters</p>
      {/* <p>{Text.length>0?0.008*Text.split(" ").length:"0 " } minutes to read</p> */}
      <h3>Preview:</h3>
      <p>{Text.length>0?Text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
