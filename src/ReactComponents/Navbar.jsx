import PropTypes from 'prop-types';
import { useState } from 'react'; // Import useState hook from React

function Navbar(props) {
    const [mode, setMode] = useState('light'); // Use useState hook to create mode state and setter

    // Move the selection of DOM elements inside the themeHandler function
    const themeHandler = () => {
        const btns = document.querySelectorAll('.btn'); // Select .btn elements inside the function
        const body = document.querySelector('body');
        const textPlayGround = document.querySelector('#textPlayGround');
        const textarea = document.querySelector('textarea');
        const lightActive = document.querySelector('.lightActive'); // Unique ID for light mode icon
        const darkActive = document.querySelector('.darkActive'); // Unique ID for dark mode icon

        if (mode === 'light') {
            setMode('dark'); // Update mode state using setMode function
            body.style.background = '#232D3F';
            textarea.classList.add('bg-secondary', 'text-light');
            btns.forEach(btn => {
                btn.classList.add('bg-success');
                btn.classList.remove('bg-dark');
            });
            textPlayGround.classList.add('text-light');
            darkActive.style.fill = '#198754'
            lightActive.style.fill = ''
            lightActive.classList.remove('green');
        } else {
            setMode('light'); // Update mode state using setMode function
            body.style.background = '';
            btns.forEach(btn => {
                btn.classList.add('bg-dark');
                btn.classList.remove('bg-success');
            });
            textarea.classList.remove('bg-secondary', 'text-light');
            textPlayGround.classList.remove('text-light');
            lightActive.style.fill = '#198754'
            darkActive.style.fill = ''
        }
    };

    return (
        <nav className="navbar navbar-expand-lg px-5">
            <div className="container">
                <a className="navbar-brand text-light fw-bold" href="#">{props.title}</a>
                <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-items-between" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                    </ul>

                    {/* Light Mode or Dark Mode */}

                    <div className="d-flex gap-2 align-items-center justify-items-center me-5">
                        {/* Light Mode Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-sun-fill lightActive" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                        </svg>
                        {/* Toggle button */}
                        <div className="form-check form-switch m-0" onClick={themeHandler}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={mode === 'dark'} />
                        </div>
                        {/* Dark Mode Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-moon-stars-fill darkActive" viewBox="0 0 16 16">
                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Page Title"
};

export default Navbar;
