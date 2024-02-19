import React from "react";

function About(props) {
    const { mode } = props;

    return (
        <>
            <div className="accordion m-5 p-5" id="accordionExample">
                <div className={`accordion-item ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed text-light ${mode === 'dark' ? 'bg-success' : 'bg-dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About TextUtils...
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>TextUtils</strong> is a basic and mini project of Text Utility to manipulate the Text as following...</p>
                            <ul class="list-group">
                                <li class={`list-group-item border border-0 ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>Convert text to Uppercase</li>
                                <li class={`list-group-item border border-0 ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>Convert text to Lowercase</li>
                                <li class={`list-group-item border border-0 ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>Remove extra spaces</li>
                                <li class={`list-group-item border border-0 ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>Copy Text</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`accordion-item ${mode === 'dark' ? 'bg-transparent text-light' : ''}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed text-light ${mode === 'dark' ? 'bg-success' : 'bg-dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About me...
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Hello, there! I'm <strong>Arif Basha K.</strong>, aspired to become a web developer. This app has built under the mentorshitp of <strong>@CodeWithHarry</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
