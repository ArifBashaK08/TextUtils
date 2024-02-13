import Navbar from './ReactComponents/Navbar';
import Textarea from './ReactComponents/Textarea';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light') //setting page theme to Light mode by default

  const themeHandler = () => {
    const body = document.querySelector('body')

    if (mode === 'light') {
      setMode('dark')
      console.log(mode + ' mode enabled')
      body.style.background = '#232D3F'
    }
    else {
      setMode('light')
      console.log(mode + ' mode enabled')
      document.body.style.background = ''
    }
  }
  return (
    <>
      <section className="section-1">
        <Navbar title='TextUtils' themeHandler={themeHandler} mode={mode} />
      </section>
      <section className="section-2">
        <Textarea mode={mode} />
      </section>
    </>)
}

export default App;