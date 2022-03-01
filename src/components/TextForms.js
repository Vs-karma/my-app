import React, {useState} from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    const handleUpClick =()=>{
        let newTxt = text.toUpperCase();
        setText(newTxt)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick =()=> {
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to LowerCase", "success");

    } 
    const handleReverseClick =()=> {
        let rev = text.split(" ");
        let revArr = rev.reverse();
        let newTxt = revArr.join(" ");
        setText(newTxt);
        props.showAlert("Text is reverse", "success");

    }  
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value());
        props.showAlert("Text Copied to clipboard", "success");


    }
    const handleOnChange =(event)=>{
        console.log("on Change");
        setText(event.target.value)
    }
    

    return (
        <div style={{color: props.mode==='dark'?'white':'#1A1A1A'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'#292929', color: props.mode==='dark'?'white':'#1A1A1A' }}></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleReverseClick}>Convert to Reverse</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container">
                <h2>Analysis of text</h2><hr />
                <p>{text.split(' ').length} words, {text.length} characters</p>
                <h2>Preview</h2><hr />
                <p>{text}</p>
            </div>
        </div>
    )
}
