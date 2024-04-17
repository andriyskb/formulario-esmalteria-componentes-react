import React from 'react';
import { useState } from 'react';

function EnamelDeliveries() {
    const [datos, setDatos] = useState([
        {
            sector: 'BATEA',
            envios: [
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
            ],
        },
        {
            sector: 'SOPLETE AZUL',
            envios: [
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
            ],
        },
        {
            sector: 'SOPLETE BK/NEGRO',
            envios: [
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
            ],
        },
        {
            sector: 'SOPLETE BLANCO',
            envios: [
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
                { enviado: false, recibido: false },
            ],
        },
    ]);

    const [contador, setContador] = useState(0);

    const ciclos = [1, 2, 3];

    const sumarContador = () => {
        if (contador < datos.length - 1) setContador((prev) => prev + 1);
        else setContador(0);
    };
    const restarContador = () => {
        if (contador > 0) setContador((prev) => prev - 1);
        else setContador(datos.length - 1);
    };
    const registrarRecibido = (id) => {
        setDatos((prev) => {
            const nuevosDatos = [...prev];
            nuevosDatos[contador].envios[id].recibido = true;
            return nuevosDatos;
        });
    };
    const registrarProcesado = (id) => {
        setDatos((prev) => {
            const nuevosDatos = [...prev];
            nuevosDatos[contador].envios[id].procesado = true;
            return nuevosDatos;
        });
    };

    return (
        <div className='py-2 h-screen flex flex-col'>
            <div role='tablist' className='tabs tabs-boxed tabs-sm mt-1'>
                {datos.map((dato, i) => {
                    let active = '';

                    if (contador === i) active = 'tab-active';
                    else active = '';

                    return (
                        <div className={`tab ${active}`} key={dato.sector}>
                            {dato.sector}
                        </div>
                    );
                })}
            </div>
            <div className='h-1/6 flex items-center justify-center w-full'>
                <div className='join'>
                    <button
                        className='join-item btn btn-lg btn-outline w-1/4'
                        onClick={() => restarContador()}>
                        «
                    </button>
                    <button className='join-item btn btn-lg btn-success w-2/4'>
                        {datos[contador].sector}
                    </button>
                    <button
                        className='join-item btn btn-lg btn-outline w-1/4'
                        onClick={() => sumarContador()}>
                        »
                    </button>
                </div>
            </div>
            <div className='flex h-5/6'>
                <div className='w-1/6 flex flex-col text-center'>
                    <div className='h-[5%]'>06:00</div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%]'>09:45</div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-accent divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%]'>12:25</div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%] divider divider-horizontal mx-auto'></div>
                    <div className='h-[5%]'>15:30</div>
                </div>
                <div className='flex-auto flex flex-col'>
                    {ciclos.map((_, index) => {
                        let recibido = 'btn-outline';
                        let procesado = 'btn-outline';
                        if (datos[contador].envios[index].recibido)
                            recibido = 'btn-success';
                        if (datos[contador].envios[index].procesado)
                            procesado = 'btn-success';

                        return (
                            <>
                                <div className='h-[5%]'></div>
                                <div className='flex-auto flex flex-col relative'>
                                    <div className='absolute w-full flex flex-col top-[10%] space-y-3'>
                                        <button
                                            className={`btn ${recibido}`}
                                            onClick={() =>
                                                registrarRecibido(index)
                                            }>
                                            RECIBIDO
                                        </button>
                                        <button
                                            className={`btn ${procesado}`}
                                            onClick={() =>
                                                registrarProcesado(index)
                                            }>
                                            PROCESADO
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    <div className='h-[5%]'></div>
                    <div className='h-[5%]'></div>
                </div>
                <div className='w-1/6 flex flex-col'>
                    {ciclos.map((ciclo, index) => {
                        let completado = '';

                        if (
                            datos[contador].envios[index].recibido &&
                            datos[contador].envios[index].procesado
                        )
                            completado = 'btn-success';

                        return (
                            <>
                                <div className='h-[5%]'></div>
                                <div className='flex-auto flex'>
                                    <div className={`h-1/2 flex-1 self-center btn text-xl mx-2 ${completado}`}>
                                        {ciclo}
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    
                    <div className='h-[5%]'></div>
                    <div className='h-[5%]'></div>
                </div>
            </div>
        </div>
    );
}

export default EnamelDeliveries;
