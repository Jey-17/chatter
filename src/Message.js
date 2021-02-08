
function Message(props){
    return <div className = "message-row">
    <div className= "message">
      {props.text}
    </div>
    <div className= "personOne"/>
  </div>
}

export default Message