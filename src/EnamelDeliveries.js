import React from "react";

function EnamelDeliveries() {
    return (<div className="py-2 h-screen flex flex-col">
       <div className="h-1/6 flex items-center justify-center">
        <div className="join">
             <button className="join-item btn btn-lg btn-outline">«</button>
             <button className="join-item btn btn-lg btn-success">BATEA</button>
             <button className="join-item btn btn-lg btn-outline">»</button>
        </div>
       </div>
        <div className="flex h-5/6">
            <div className="w-1/6 flex flex-col text-center">
              <div className="h-[5%]">06:00</div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%]">09:45</div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-accent divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%]">12:25</div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%] divider divider-horizontal mx-auto"></div>
              <div className="h-[5%]">15:30</div>
            </div>
            <div className="flex-auto flex flex-col">
                <div className="h-[5%]"></div>
                <div className="flex-auto flex flex-col relative">
                    <div className="absolute w-full flex flex-col top-[10%] space-y-3">
                        <button className="btn btn-outline">RECIBIDO</button>
                        <button className="btn btn-outline">PROCESADO</button>
                    </div>
                </div>
                <div className="h-[5%]"></div>
                <div className="flex-auto flex flex-col relative">
                    <div className="absolute w-full flex flex-col top-[10%] space-y-3">
                        <button className="btn btn-outline">RECIBIDO</button>
                        <button className="btn btn-outline">PROCESADO</button>
                    </div>
                </div>
                <div className="h-[5%]"></div>
                <div className="flex-auto flex flex-col relative">
                    <div className="absolute w-full flex flex-col top-[10%] space-y-3">
                        <button className="btn btn-outline">RECIBIDO</button>
                        <button className="btn btn-outline">PROCESADO</button>
                    </div>
                </div>
                <div className="h-[5%]"></div>
                <div className="h-[5%]"></div>
            </div>
            <div className="w-1/6 flex flex-col">
               <div className="h-[5%]"></div> 
               <div className="flex-auto flex">
                    <div className="h-1/2 flex-1 self-center btn text-xl mx-2">1</div>
                </div> 
               <div className="h-[5%]"></div> 
               <div className="flex-auto flex">
                    <div className="h-1/2 flex-1 self-center btn text-xl mx-2">2</div>
                </div> 
               <div className="h-[5%]"></div> 
               <div className="flex-auto flex">
                    <div className="h-1/2 flex-1 self-center btn text-xl mx-2">3</div>
                </div> 
               <div className="h-[5%]"></div> 
               <div className="h-[5%]"></div> 
            </div>
        </div>
        
    </div>)
}

export default EnamelDeliveries;