import { useState } from "react";

function Textarea() {
    const [text, setText] = useState('');

    // Function to convert text to UpperCase
    const uppercaseHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Function to convert text to LowerCase
    const lowercaseHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // Function to Clear text
    const clearHandler = () => {
        setText('');
    };

    // Default function for Textarea tag to make any change inside
    const changeHandler = (event) => {
        setText(event.target.value);
    };

    // Function to Copy text
    const copyHandler = () => {
        // Select the text inside the text field
        navigator.clipboard.writeText(text);

        // Alert the copied text
        alert("Text copied");
    };

    return (
        <>
            <div className="p-2" id="textPlayGround">
                <h4 className="form-label my-3 fw-bold">Analyse text below</h4>
                <textarea
                    className="form-control"
                    placeholder="Enter text here..."
                    id="exampleFormControlTextarea1"
                    rows="10"
                    value={text}
                    onChange={changeHandler}
                ></textarea>
                <div className="details container mt-3 fw-bold d-flex gap-5">
                    <p className="words">
                        Words :{" "}
                        <span className="count text-success">
                            {text === "" ? 0 : text.split(" ").length}
                        </span>
                    </p>
                    <p className="letters">
                        Letters :{" "}
                        <span className="count text-success">{text.length}</span>
                    </p>
                </div>
            </div>
            <div className="buttons d-flex gap-5 flex-wrap col-md-12">
                <button className="btn btn-dark" onClick={uppercaseHandler}>
                    Transform to Uppercase
                </button>
                <button className="btn btn-dark" onClick={lowercaseHandler}>
                    Transform to Lowercase
                </button>
                <button className="btn btn-dark" onClick={clearHandler}>
                    Clear Text
                </button>
                <button className="btn btn-dark" onClick={copyHandler}>
                    Copy Text
                </button>
            </div>
        </>
    );
}

export default Textarea;
