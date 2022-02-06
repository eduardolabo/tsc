import {useState, useRef, useEffect} from 'react';

type User={
    name:string;
    age:number;
}

const users:User[]=[
    {name: 'Sarah', age: 20},
    {name: 'Alex', age:20},
    {name: 'Michael', age: 20}
]


const UserSearch:React.FC = ()=>{
    const inputRef=useRef<HTMLInputElement | null>(null);
    const [name, setName]=useState("");
    const [found, setFound] = useState<User|undefined>();
    useEffect(() => {
      if(!inputRef.current)return;
      inputRef.current.focus();
    }, []);
    

    const onClick=()=>{
        const foundUser=users.find((user)=>{
            return user.name===name;
        })
        setFound(foundUser);

    }

    return(
        <div>
            <h3>User Search</h3>
            <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            <div>
                {found&&found.name}
                {found&&found.age}
            </div>
        </div>
    )
};

export default UserSearch;

