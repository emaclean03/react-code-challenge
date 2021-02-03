import React from "react";
import {IDevice} from "../Common/interfaces";


const Device = ({DeviceStatus, DeviceName}: IDevice) => {
    return (
        /*Red / Green bar for Off/On on left side of container*/
        <div className={'flex bg-gray-200 container rounded-md h-16 w-1/2 mx-auto m-6'}>
            <svg
                className={`inline-block fill-current ${DeviceStatus ? 'bg-green-500' : 'bg-red-500'} h-full rounded-sm w-1`}>
                <line x1="0" y1="0"/>
            </svg>

            {/*Device name */}
            <div className={'w-11/12 my-auto ml-3'}>{DeviceName}</div>

            {/*On / Off on the end of the container*/}
            <div className={'my-auto'}>
                {DeviceStatus ? 'On' : 'Off'}
                <svg className={'inline-block'} height="25" width="25">
                    <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2"
                            fill={`${DeviceStatus ? 'green' : 'red'}`}/>
                </svg>
            </div>
        </div>
    )
}

export default Device;