import React from 'react';

type Props = {};

const onChange=(event:React.ChangeEvent)=>{
    console.log(event);
}
const onDragStart=(event:React.DragEvent)=>{
    console.log(event);
    console.log('I am being dragged')
}

const Eventcomponent:React.FC<Props> = (props) => {
  return <div>
      <input onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag Me!</div>
  </div>;
};

export default Eventcomponent;
