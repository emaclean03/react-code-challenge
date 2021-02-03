import React, {useEffect} from 'react';
import {MockAPI} from "./Data/MockAPI";
import Device from "./Components/Device";
import {IDevice} from "./Common/interfaces";

const App = () => {
    return (
        <div className="App">
            {/*Display our devices from Data/MockAPI*/}
            {MockAPI.map((item: IDevice) => {
                return <Device {...item}/>
            })}
        </div>
    );
}


export default App;
