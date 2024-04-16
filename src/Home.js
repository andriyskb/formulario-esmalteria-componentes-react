import React from "react";

function Home() {
    return <div className="flex flex-col max-w-72 mx-auto space-y-4 mt-4">

        <a href="/form" className="btn btn-primary">Pedidos</a>
        <a href="/deliveries" className="btn btn-primary">Entregas</a>

    </div>
}

export default Home;