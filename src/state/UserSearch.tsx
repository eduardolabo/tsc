import {useState} from 'react';


const users=[
    {name: 'Sarah', age: 20},
    {name: 'Alex', age:20},
    {name: 'Michael', age: 20}
]


const UserSearch:React.FC = ()=>{
    const [name, setName]=useState("");
    const onClick=()=>{
        const foundUser=users.find((user)=>{
            return user.name===name;
        })
    }

    return 
    <div>
    <input value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
    </div>
};

export default UserSearch;