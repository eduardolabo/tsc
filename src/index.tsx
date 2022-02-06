import ReactDOM from 'react-dom';
import Eventcomponent from './events/Eventcomponent';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';

const App=()=>{
    return(
        <div>
            <UserSearch/>
            {/* <UserSearch/>*/}
            {/* <Eventcomponent/> */}
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))