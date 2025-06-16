
const UndefinedExample = () => {
    const obj: { prop?: string } = {}; // Propiedad opcional
    return <div>{obj.prop!.length}</div>; // Usando el operador de aserción no nulo
}

export default UndefinedExample;
