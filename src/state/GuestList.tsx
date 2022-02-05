import React, { useState } from 'react';

type Props = {};

const GuestList:React.FC<Props> = (props) => {

    const [name, setName]=useState("");
    const [guests, setGuests]=useState<string[]>([]);

    const onClick=()=>{
      setGuests([...guests, name]);
      setName("");
    }
  return (
    <div>
        <h3>Guest List</h3>
        <ul>
          {guests.map(element=><li>{element}</li>)}
        </ul>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>Add Guest</button>
    </div>);
};

export default GuestList;