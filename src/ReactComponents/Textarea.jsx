import React, { useState } from "react";

function Textarea(props) {

    return (
        <>
            <div className="container align-items-center m-auto">
                <h3 className="fw-bold">Analyse your Text below</h3>
                <div className="my-3">
                    <textarea className="form-control rounded" id="myBox" rows="10"></textarea>
                </div>
                <div className="d-flex justify-content-evenly align-items-center w-100">
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Uppercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Lowercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Uppercase</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Copy Text</button>
                    <button type="button" className={`btn ${props.mode === 'dark' ? 'btn-success' : 'btn-dark'}`}>Clear Text</button>
                </div>
            </div>



        </>
    )

}

export default Textarea;