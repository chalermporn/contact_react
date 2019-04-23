import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from 'react-dom';

// function xxx() {

// }



const App: React.FC = () => {
const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
    alert(
      `
      Hi: ${name}
      Email: ${email}
      Message: ${message}
      `
    )
    setName("");
    setEmail("")
    setMessage("")
  
  }
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
  return (
    <div className="container">
      <h3 className="title">Hi there!</h3>
      <form onSubmit={submitForm}>
        <input 
        className="form-field"
          type="text" 
          placeholder="Name" 
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
        className="form-field"
          type="email" 
          placeholder="Email" 
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea 
        className="form-field "
          rows={4}  
          placeholder="Message" 
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}> 
        </textarea>
        <button className="btn" type="submit" >Send Message</button>
      </form>
    </div>
  )
}

export default App;