
function Display({ className, operando1, operando2, operador, resultado }) {
    return <div className={className}>{getLabel(operando1, operando2, operador, resultado)}</div>
}

export default Display

function getLabel(op1, op2, operator, result) {
    return (`${op1 || '0'} ${operator || ''} ${op2 || ''} ${result ? '= '.concat(result) : ''}`)
}