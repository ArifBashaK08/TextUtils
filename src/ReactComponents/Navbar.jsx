import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar(props) {
  let red = document.querySelector('.red')
  let blue = document.querySelector('.blue')
  let green = document.querySelector('.green')

  const redThemeHandler = () => {
    document.body.style.background = '#2f0409'
    red.style.border = '.25rem solid white'
    blue.style.border = 'none'
    green.style.border = 'none'
  }
  const blueThemeHandler = () => {
    document.body.style.background = '#032342'
    blue.style.border = '.25rem solid white'
    red.style.border = 'none'
    green.style.border = 'none'
  }
  const greenThemeHandler = () => {
    document.body.style.background = '#092b29'
    green.style.border = '.25rem solid white'
    blue.style.border = 'none'
    red.style.border = 'none'
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode === 'dark' ? 'dark' : 'success'} px-5`}>
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand fw-bold text-light" to="/">{props.title}</Link>
        {/* <a className="navbar-brand fw-bold text-light" href="#">{props.title}</a> */}
        <button className="navbar-toggler" style={{ background: '#198754' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 d-flex">
            <li className="nav-item">
              {/* <a className="nav-Link active text-light text-decoration-none fw-medium" aria-current="page" href="#">Home</a> */}
              <Link className="nav-Link active text-light text-decoration-none fw-medium" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-Link text-light text-decoration-none fw-medium" href="#">About</a> */}
              <Link className="nav-Link text-light text-decoration-none fw-medium" to="/about">About</Link>
            </li>
          </ul>
          <div className="container d-flex flex-row-reverse text-end">
            <div className="d-flex justify-content-evenly align-items-center text-light gap-3">
              {/* Light mode */}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`bi bi-brightness-high-fill  ${props.mode === 'dark' ? '' : 'day'}`}viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              
              {/* Theme switch */}

              <div className="form-check form-switch m-0">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.themeHandler} />
              </div>

              {/* Dark mode */}
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-moon-stars-fill  ${props.mode === 'dark' ? 'night' : ''}`} viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
              
            </div>
            <div className={`${props.mode === 'dark' ? 'd-flex' : 'd-none'} mx-5 gap-3 align-items-center`}>
              <button className="btn btn-danger rounded-circle red m-0 p-0" style={{height: '1.5rem', width: '1.5rem'}} onClick={redThemeHandler}></button>
              <button className="btn btn-primary rounded-circle blue m-0 p-0" style={{height: '1.5rem', width: '1.5rem'}} onClick={blueThemeHandler}></button>
              <button className="btn btn-success rounded-circle green m-0 p-0" style={{height: '1.5rem', width: '1.5rem'}} onClick={greenThemeHandler}></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//   title : PropTypes.string.isRequired
// }

Navbar.defaultProps = {
  title: 'Title here'
}

export default Navbar;