import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      //console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }

    const handleOnChange = (event)=>{
        //console.log("on Change");
        setText(event.target.value)
    }



    const [text, setText] = useState('Enter the text');
    //text = "new text" ; Wrong  way to change the state
    //setText("new text"); Correct way to change the text

  return (
<>    
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to upperCase</button>
    <button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to lowerCase</button>

    </div>


    <div className='conatainer my-3' >
    <h1>Your text summary</h1>
    <p>{text.split(" ")} word and {text.length} character</p>
    <p> {0.008* text.split(" ").length} Minute read </p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>

  )
}
