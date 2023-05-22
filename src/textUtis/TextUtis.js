import React, { useState } from 'react'

export default function TextUtis({mode,alert,showAlert}) {
    const [text, setText] = useState("")

    const handleChange = (eve) => {
        setText(eve.target.value)
        // console.log(eve.target.value)
    }
    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText)
        showAlert("Text is UpperCased.",'success')
        // console.log(newText)
    }
    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        showAlert("Text is LowerCased.",'success')
        // console.log(newText)
    }
    return (
        <div>
            <div className="form-group container" style={{color:mode==='light'?"black":'white'}}>
                <h2 className='my-2'>TextUtis:</h2>
                <textarea className="form-control" id="textutis" value={text} cols="8" rows="10" onChange={handleChange}></textarea>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleUp}>UpperCase Convert</button>
                <button className="btn btn-primary mt-3 mx-1" onClick={handleLower}>LowerCase Convert</button>
            </div>
            <div className="container" style={{color:mode==='light'?"black":'white'}}>
                <h2>Preview:</h2>
                <p>{text.length>0?text:"Enter your text into the above textareabox.."}</p>
                <h2>Your text Summary</h2>
                <p>{text==[]?0:text.split(" ").length} words and {text.length} Characters</p>
                <h2>Time Required for Reading</h2>
                <p>{0.08*text.split(" ").length} minutes</p>
            </div>
        </div>
    )
}
