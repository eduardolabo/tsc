import React from 'react';

type Props = {
    color:string;
    onClick:()=>void;
};

const Child:React.FC<Props> = (props) => {
  return <div>
      {props.color}
      <button onClick={props.onClick}>Click me</button>
    {props.children}
  </div>;
};

export default Child;