import React, {useEffect} from 'react';
import {MockAPI} from "./Data/MockAPI";

interface IDevice {
    DeviceID: number,
    DeviceName: string,
    DeviceStatus: boolean,
}

const App = () => {
    useEffect(() => {
        console.log(MockAPI);
    }, [])

    return (
        <div className="App">
            {MockAPI.map((item: IDevice) => {
                return (
                    <div className={'flex bg-gray-200 container rounded-md h-16 w-1/2 mx-auto m-6'}>
                        {item.DeviceStatus ?
                            <svg
                                className={'inline-block fill-current bg-green-500 h-full rounded-sm w-1'}>
                                <line
                                    x1="0" y1="0"/>
                            </svg>
                            :
                            <svg
                                className={'inline-block fill-current bg-red-700 h-full rounded-sm w-1'}>
                                <line
                                    x1="0" y1="0"/>
                            </svg>
                        }
                        <div className={'w-11/12 my-auto ml-3'}>{item.DeviceName}</div>
                        {item.DeviceStatus ?
                            <div className={'my-auto'}>
                                On
                                <svg className={'inline-block'} height="25" width="25">
                                    <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" fill="green"/>
                                </svg>
                            </div> :
                            <div className={'my-auto'}>
                                Off
                                <svg className={'inline-block'} height="25" width="25">
                                    <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" fill="red"/>
                                </svg>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    );
}


export default App;
