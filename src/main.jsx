import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './ReactComponents/Navbar.jsx'
import Textarea from './ReactComponents/Textarea.jsx'
import Alerts from './ReactComponents/Alerts.jsx'
import './custom.css'

const App = () =>{

  const [alert, setAlert] = useState(null)

  const showMsg = (message, msgType) => {
      setAlert = {
          msg: message,
          type: msgType
      }
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <section className="section1 navBar bg-dark">
      <Navbar title='TextUtils' />
    </section>
    <section className="container section2 justify-contents-center py-5">
      {/* <Alerts alert={alert}/> */}
      <Textarea />
    </section>
  </>
)

