import React, { useState } from "react";

function Textarea(props) {

    const   [text, setText] = useState('Enter text here...')



    //Function to add text in input

    const changeHandler = (event) => {
        setText(event.target.value)
    }

    //Function to convert text to LowerCase

    const lowercaseHandler = () => {
        let result = text.toLowerCase()
        setText(result)
    }
    //Function to convert text to UpperCase
    const uppercaseHandler = () => {
        let result = text.toUpperCase()
        setText(result)
    }
    //Function to copy text
    const CopyHandler = () => {
        let copyText = document.getElementById('myBox')
        copyText.select()
        navigator.clipboard.writeText(copyText.value) 
        props.showAlert('Text copied', 'success')
    }
    //Function to clear text
    const clearHandler = () => {
        let result = ''
        setText(result)
    }
    //Function to get word count
    let wordCount = text.split(' ').length;
    let letterCount = text.length;


    return (
        <>
            <div className="container align-items-center mt-5">
                <h3 className={`fw-bold ${props.mode === 'dark' ? 'text-light' : ''}`}>Analyse your Text below</h3>
                <div className={`my-3 ${props.mode === 'dark' ? 'bg-secondary text-light' : ''}`}>
                    <textarea className={`form-control rounded ${props.mode === 'dark' ? 'bg-secondary text-light' : ''}`} onChange={changeHandler} id="myBox" value={text} rows="10"></textarea>
                </div>
                <div className="my-3 d-flex gap-5">
                    <strong className={`my-3 ${props.mode === 'dark' ? 'text-light' : ''}`}>Words : <span className="text-success">{text === ''? wordCount-1 : text.split(' ') ? wordCount-1 : wordCount}</span></strong>
                    <strong className={`my-3 ${props.mode === 'dark' ? 'text-light' : ''}`}>Letters : <span className="text-success">{letterCount}</span></strong>
                </div>
                <div className="d-flex flex-wrap justify-content-start gap-5 align-items-center">
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`} onClick={uppercaseHandler}>Uppercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`} onClick={lowercaseHandler}>Lowercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Uppercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`} onClick={CopyHandler}>Copy Text</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`} onClick={clearHandler}>Clear Text</button>
                </div>
            </div>



        </>
    )

}

export default Textarea;

