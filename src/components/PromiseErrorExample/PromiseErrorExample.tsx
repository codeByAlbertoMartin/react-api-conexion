//Error Boundary no funciona con errores de promeesas, solo con errores de renderizado
import { useState, useEffect } from "react";

const PromiseErrorExample = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        //throw new Error("This is a simulated error in a promise"); Este si que funciona, pero no esta dentro de la promesa
        const fetchData = async () => {
            throw new Error("This is a simulated error in a promise");
        }
        fetchData().catch((error) => {
            setData(`Error: ${error.message}`);
            throw new Error("This is a simulated error in a promise");
        });
    }, []);
    return <div>Data: {data}</div>;

}

export default PromiseErrorExample;