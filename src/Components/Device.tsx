import React from "react";

const Device = (props: any) => {
    return (
        /*Red / Green bar for Off/On on left side of container*/
        <div className={'flex bg-gray-200 container rounded-md h-16 w-1/2 mx-auto m-6'}>
            <svg
                className={`inline-block fill-current ${props.DeviceStatus ? 'bg-green-500' : 'bg-red-500'} h-full rounded-sm w-1`}>
                <line x1="0" y1="0"/>
            </svg>

            {/*Device name */}
            <div className={'w-11/12 my-auto ml-3'}>{props.DeviceName}</div>

            {/*On / Off on the end of the container*/}
            <div className={'my-auto'}>
                On
                <svg className={'inline-block'} height="25" width="25">
                    <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2"
                            fill={`${props.DeviceStatus ? 'green' : 'red'}`}/>
                </svg>
            </div>

        </div>
    )
}

export default Device;