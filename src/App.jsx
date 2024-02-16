import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './ReactComponents/Navbar';
import Textarea from './ReactComponents/Textarea';
import Alerts from './ReactComponents/Alerts';
// import About from './ReactComponents/About';

function App() {
  const [mode, setMode] = useState('light'); // setting page theme to Light mode by default
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const themeHandler = () => {
    const body = document.querySelector('body');

    if (mode === 'light') {
      setMode('dark');
      body.style.background = '#232D3F';
      showAlert('Dark mode has enabled', 'success');
    } else {
      setMode('light');
      document.body.style.background = '';
      showAlert('Light mode has enabled', 'success');
    }
  };

  return (
    <>
    {/* <BrowserRouter> */}
      <section className="container-fluid m-0 p-0">
        <Navbar title='TextUtils' themeHandler={themeHandler} mode={mode} />
        <Alerts alert={alert} />
      </section>
      <section className="section2 container-fluid">
      <Textarea mode={mode} showAlert={showAlert} />
      </section>
      {/* <Routes> */}
        {/* <Route exact path="/home" element={<Textarea mode={mode} showAlert={showAlert} />} /> */}
        {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
        {/* Define other routes as needed */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
