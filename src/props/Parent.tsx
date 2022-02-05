import React from 'react';
import Child from './Child';

type Props = {};

const Parent:React.FC<Props> = (props) => {
  return <div>
      <Child color='red' onClick={()=>console.log("click")}>
          hello
      </Child>
  </div>;
};

export default Parent;