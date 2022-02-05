import React, { useState } from 'react';

type Props = {};

const GuestList:React.FC<Props> = (props) => {

    const [name, setName]=useState("");
  return (
    <div>
        <h3>Guest List</h3>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button>Add Guest</button>
    </div>);
};

export default GuestList;