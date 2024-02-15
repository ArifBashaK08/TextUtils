import Navbar from './ReactComponents/Navbar';
import Textarea from './ReactComponents/Textarea';
import Alerts from './ReactComponents/Alerts';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light') //setting page theme to Light mode by default

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null)
    }, 2000)
  }

  const themeHandler = () => {
    const body = document.querySelector('body')

    if (mode === 'light') {
      setMode('dark')
      body.style.background = '#232D3F'
      showAlert('Dark mode has enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.background = ''
      showAlert('Light mode has enabled', 'success')
    }
  }
  return (
    <>
      <section className="section-1">
        <Navbar title='TextUtils' themeHandler={themeHandler} mode={mode} />
      </section>
      <Alerts alert={alert} />
      <section className="section-2 m-auto">
        <Textarea mode={mode} showAlert={showAlert} />
      </section>
    </>)
}

export default App;