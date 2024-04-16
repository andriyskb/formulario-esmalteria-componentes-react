import React from "react";

function EnamelDeliveries() {
    return (<div className="py-2 h-screen">
        <div className="text-2xl text-center text-neutral">BATEA</div>
        <div className="flex h-1/4">
            <div className="w-1/6 divider divider-horizontal divider-success">06:00</div>
            <div className="flex-auto flex flex-col justify-center">
                <div className="h-1/6 text-center font-semibold">
                    <span>CICLO <span className="text-primary font-bold">1</span></span>
                </div>
                <div className="h-1/4 flex justify-around items-center space-x-2">
                    <div className="text-center flex-1 btn btn-outline">
                       RECIBIDO 
                    </div>
                     <div className="text-center flex-1 btn btn-outline">
                       PROCESADO 
                    </div>
                </div>
            </div>
            <div className="w-1/6 divider divider-horizontal divider-success">09:45</div>
        </div>
        <div className="flex h-1/4">
            <div className="w-1/6 divider divider-horizontal divider-success">09:45</div>
            <div className="flex-auto flex flex-col justify-center">
                <div className="h-1/6 text-center font-semibold">
                    <span>CICLO <span className="text-primary font-bold">2</span></span>
                </div>
                <div className="h-1/4 flex justify-around items-center space-x-2">
                    <div className="text-center flex-1 btn btn-outline">
                       RECIBIDO 
                    </div>
                     <div className="text-center flex-1 btn btn-outline">
                       PROCESADO 
                    </div>
                </div>
            </div>
            <div className="w-1/6 divider divider-horizontal divider-success">12:25</div>
        </div>
        <div className="flex h-1/4">
            <div className="w-1/6 divider divider-horizontal divider-success">12:25</div>
            <div className="flex-auto flex flex-col justify-center">
                <div className="h-1/6 text-center font-semibold">
                    <span>CICLO <span className="text-primary font-bold">3</span></span>
                </div>
                <div className="h-1/4 flex justify-around items-center space-x-2">
                    <div className="text-center flex-1 btn btn-outline">
                       RECIBIDO 
                    </div>
                     <div className="text-center flex-1 btn btn-outline">
                       PROCESADO 
                    </div>
                </div>
            </div>
            <div className="w-1/6 divider divider-horizontal divider-success">15:30</div>
        </div>
    </div>)
}

export default EnamelDeliveries;