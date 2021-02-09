import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'

function App() {
  const messages = useDB()
  const [username,setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  console.log(messages)
  return <div className="App">
 
    <header className="header">
      <div className="logo" />
      FRUITY CHATTER
      <NamePicker saveName={setUsername} />
    </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        const isMe = msg.name===username
        return <Message key={i} {...msg} isMe={isMe} />
      })}
    </main>

    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date()})}
    />
    
    {/* <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date()})}
    /> */}

  </div>
}

export default App;


// function App() {
//   const [count, setCount] = useState(1)
//   return <div style = {{fontSize:300}}
//     onClick={() => setCount(count+1)}>
//     {count}
//   </div>
// }

// React-y Pattern; good for showing counter in multiple places
// function App() {
//     const [count, setCount] = useState(1)
//     return <Counter 
//       count={count}
//       setCount={setCount}
//     />
//   }

// function Counter(props) {
//   return <div style = {{fontSize:300}}
//     onClick={() => props.setCount(props.count+1)}>
//     {props.count}
//   </div>
// }