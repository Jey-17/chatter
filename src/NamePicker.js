import {useState} from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(
        localStorage.getItem('username') || ''
    )

    function save(){
        props.saveName(username)
        setShowInput(false)   
        localStorage.setItem('username',username)     
    }

    if (showInput) {
        return <div className= "name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={save} className= "okay-picker">
                <AiOutlineCheck title= "okay" 
                style={{minWidth:'0.7rem', marginLeft:2}} 
                />
            </button>
        </div>
    }

    return <div className= "name-picker">
        <div>{username}</div>
        <button onClick={()=> setShowInput(true)} className= "edit-picker">
            <AiFillEdit title= "edit" 
            style={{minWidth:'0.7rem', marginLeft:2}} 
            />
        </button>
    </div>
}

export default NamePicker