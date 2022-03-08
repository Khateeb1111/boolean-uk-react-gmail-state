import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

import {useState} from "react"; 

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

/* Render a list of emails from state so it looks similar to the screenshot above.
  - You can find an HTML template for each email in the templates folder */
  const [emails, setEmails]  = useState(initialEmails)

  // Adding Items (3 steps)
  // DONE 1. Create copy of the original array e.g. emailsCopy is a copy of emails
  // 2. push the new element into the copy array (.push)
  // 3. Update the state using setEmails(emailsCopy)
  
  const emailsCopy = emails.map(function(emailElement) {

    return <li className="email">
  <div className="select">
	<input
	  className="select-checkbox"
	  type="checkbox"/>
  </div>
  <div className="star">
	<input
	  className="star-checkbox"
	  type="checkbox"
	/>
  </div>
  <div className="sender"> {emailElement.sender} </div>
  <div className="title"> {emailElement.title} </div>
</li>
  })


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emailsCopy}</main>
    </div>
  )
}

export default App
