import { VscEdit, VscCheck, VscAdd, VscTrash } from 'react-icons/vsc';
import { useState, } from 'react'
import "../App.css"
import AddItem from './addItem.js'

const Alltock = () => {
    const [items, setItems] = useState([
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "edittable": "false",
         
          
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "edittable": "false",
         
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "edittable": "false",
          
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "edittable": "false",
          
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "edittable": "false",
         
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "edittable": "false",
         
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "edittable": "false",
          
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "edittable": "false",
         
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "edittable": "false",
         
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "edittable": "false",
         
        }
      ])
    const [edittable, setEdittable] = useState(false)
    const [displayTrash, setDisplayTrash] = useState('block')
    const [seable, setSeable] = useState('none')
    const [tick, setTick] = useState('block')
    const [itemAdder, setItemadder] = useState('none')
    const [search, setSearch] = useState("")
  




    function editthis(id) {

        setSeable('block')
        setEdittable(true)
        setDisplayTrash('none')
        setTick("none")
        console.log(id)

    }
    function confirmthis() {
        setSeable('none')
        setDisplayTrash('block')
        setEdittable(false)
        setTick('block')
    }

    function filterThis(id) {

        setItems(items.filter((item) => item.id !== id))



    }

    function addItem(){
        setItemadder('block')
    }



    function removeItemadder(){
        setItemadder('none')
    }

    const filteredItems = items.filter(item=>{
        
        return item.name.toUpperCase().includes(search.toUpperCase())})
        
    


    return <>
        <div className="nav">
<input onChange={e=>setSearch(e.target.value)} style={{width:440, height:50, borderRadius:10, borderWidth:1, outline:'none', float:'left', margin:10}} placeholder='Search...' type="search"></input>

            <button style={{ float: 'right' }} onClick={()=>{addItem()}}>
                <p style={{ float: 'right', marginTop: 25 }}>Add Item</p>
                <VscAdd id='edit' size={30} style={{ float: 'right', color: 'blue', margin: 15 }} onClick={() => { }} />
            </button>

        </div>
        <AddItem removeItemadder={removeItemadder} itemAdder={itemAdder} />

        {filteredItems.map(item => {
            return (
                <>
                    <div key={item.id} className='item' contentEditable={`item ${item.edittable ? "true" : false}`}  >
                        <label className='field'  >{item.name}</label>
                        <label className='field'  >{item.username}</label>
                        <label className='field'  >{item.email}</label>
                        <VscEdit id='edit' size={30} className='edit' style={{ display: tick }} onClick={() => { editthis(item.id) }} />
                        <VscTrash id='edit' size={30} className='edit' style={{ display: displayTrash }} onClick={() => { filterThis(item.id) }} />
                        <VscCheck size={30} className='tick' style={{ display: seable }} onClick={() => { confirmthis() }} />
                    </div>
                </>
            )

        })}
    </>
}
export default Alltock