import {useState} from 'react'
import "../App.css"
import { VscCheck } from 'react-icons/vsc';




const AddItem = ({removeItemadder, itemAdder}) => {

    
    const [name , setName] = useState('')
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')



    return (
        <button className="item" style={{borderWidth:1,borderRadius:5, display:itemAdder}}>
            <input value={name} className="inputbox" onChange={(e) => setName(e.target.value)} ></input>
            <input value={username} className="inputbox" onChange={(e) => setUsername(e.target.value)} ></input>
            <input value={email} className="inputbox" onChange={(e) => setEmail(e.target.value)} ></input>
      
            

             <VscCheck size={30} className='tick' style={{ float:'right' }} onClick={() => {removeItemadder()}} />
            
        </button>
    )
}

export default AddItem
