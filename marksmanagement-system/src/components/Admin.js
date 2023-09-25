import React, { useRef,useState } from 'react'
import './Admin.css'
export default function Admin() {
    const list = [
        {
            id: 1,
            regno:"seee",
            daa:"asj",
            os:"12",
            atfl:"43",
            pfsd:"20"

        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
      
        <div className='crud'>
          {/* <h1 className="absolute font-serif font-bold -mt-96 text-2xl">Adding Students Details</h1> */}
            <div className='ta'>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table className='admin-table td'>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.regno}</td>
                            <td>{current.daa}</td>
                            <td>{current.os}</td>
                            <td>{current.atfl}</td>
                            <td>{current.pfsd}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const regno = event.target.elements.regno.value
        const daa = event.target.elements.daa.value
        const os = event.target.elements.os.value
        const atfl = event.target.elements.atfl.value
        const pfsd = event.target.elements.pfsd.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, regno:regno, daa: daa,os:os,atfl:atfl,pfsd:pfsd} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    
    function handInputregno(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, regno :value} : li
      ))

      setList(newlist)
  }
    function handInputdaa(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, daa :value} : li
        ))

        setList(newlist)
    }
    function handInputos(event) {
      const value = event.target.value;
      const newlist = lists.map((li) => (
          li.id === current.id ? {...li, os:value} : li
      ))

      setList(newlist)
  }function handInputatfl(event) {
    const value = event.target.value;
    const newlist = lists.map((li) => (
        li.id === current.id ? {...li, atfl :value} : li
    ))

    setList(newlist)
}function handInputpfsd(event) {
  const value = event.target.value;
  const newlist = lists.map((li) => (
      li.id === current.id ? {...li, pfsd :value} : li
  ))

  setList(newlist)
}
    return(
        <tr>
            <td><input type="text" onChange={handInputregno} name='regno' value={current.regno}/></td>
            <td><input type="text" onChange={handInputdaa} name='daa' value={current.daa}/></td>
            <td><input type="text" onChange={handInputos} name='os' value={current.os}/></td>
            <td><input type="text" onChange={handInputatfl} name='atfl' value={current.atfl}/></td>
            <td><input type="text" onChange={handInputpfsd} name='pfsd' value={current.pfsd}/></td>

            <td><button type='submit'>Update</button></td>
        </tr>
    )
}
function AddList({setList}) {
    const regnoRef = useRef()
    const daaRef = useRef()
    const osRef = useRef()
    const atflRef = useRef()
    const pfsdRef = useRef()
    

    function handleSubmit(event) {
        event.preventDefault();
        const regno=event.target.elements.regno.value;
        const daa = event.target.elements.daa.value;
        const os = event.target.elements.os.value;
        const atfl = event.target.elements.atfl.value;
        const pfsd = event.target.elements.pfsd.value;
        const newlist = {
            id: 2,
            regno,
            daa,
            os,
            atfl,
            pfsd
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        regnoRef.current.value = ""
        daaRef.current.value = ""
        osRef.current.value = ""
        atflRef.current.value = ""
        pfsdRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input  type="text" name="regno" placeholder="Enter regno" ref={regnoRef}/>
            <input type="text" name="daa" placeholder="Enter daa marks" ref={daaRef}/>
            <input type="text" name="os" placeholder="Enter os marks" ref={osRef}/>
            <input type="text" name="atfl" placeholder="Enter atfl marks" ref={atflRef}/>
            <input type="text" name="pfsd" placeholder="Enter pfsd marks" ref={pfsdRef}/>
            <button type="submit">Add</button>
        </form>
    )
}