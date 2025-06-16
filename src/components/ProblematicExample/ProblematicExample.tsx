import { useEffect } from "react";

const ProblematicExample = () => {
    useEffect(() => {
        // This will throw an error during the component's render phase
        throw new Error("This is a simulated error in the render phase");
    }, []);

    return <div>This component will always throw an error.</div>;
};
export default ProblematicExample;