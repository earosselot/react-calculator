import './Calculator.css'
import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'


function Calculator() {
    const [operando1, setOperando1] = useState('')
    const [operando2, setOperando2] = useState('')
    const [operador, setOperador] = useState('')
    const [resultado, setResultado] = useState('')

    const handleOperationClick = (text) => {
        if (operando1 !== '' && operando2 === '') {
            setOperador(text)
        }
    }

    const handleNumberClick = (text) => {
        if (resultado !== '') {
            clearValues()
            setOperando1(''.concat(text))
        } else if (operador === '') {
            setOperando1(operando1.concat(text))
        } else if (operador !== '') {
            setOperando2(operando2.concat(text))
        }
    }

    const handleDotClick = () => {
        if (operador === '' && !operando1.includes('.')) {
            setOperando1(operando1.concat('.'))
        } else if (operador !== '' && !operando2.includes('.') && resultado === '') {
            setOperando2(operando2.concat('.'))
        }
    }

    const clearValues = () => {
        setOperando1('')
        setOperando2('')
        setOperador('')
        setResultado('')
    }

    const showResult = () => {
        if (operando1 !== '' && operando2 !== '' && operador !== '') {
            setResultado(sacarCuenta(operando1, operando2, operador))
        }

    }

    return (
        <section>
            <div className="calculator">
                <Display className="calculator-display"
                         operando1={operando1}
                         operando2={operando2}
                         operador={operador}
                         resultado={resultado} />
                <Button handleButtonClick={clearValues} className="clear-button">C</Button>
                <Button handleButtonClick={handleOperationClick}>/</Button>
                <Button handleButtonClick={handleOperationClick}>*</Button>
                <Button handleButtonClick={handleNumberClick}>7</Button>
                <Button handleButtonClick={handleNumberClick}>8</Button>
                <Button handleButtonClick={handleNumberClick}>9</Button>
                <Button handleButtonClick={handleOperationClick}>-</Button>
                <Button handleButtonClick={handleNumberClick}>4</Button>
                <Button handleButtonClick={handleNumberClick}>5</Button>
                <Button handleButtonClick={handleNumberClick}>6</Button>
                <Button handleButtonClick={handleOperationClick} className="plus-button">+</Button>
                <Button handleButtonClick={handleNumberClick}>1</Button>
                <Button handleButtonClick={handleNumberClick}>2</Button>
                <Button handleButtonClick={handleNumberClick}>3</Button>
                <Button handleButtonClick={handleNumberClick}>0</Button>
                <Button handleButtonClick={handleDotClick}>.</Button>
                <Button handleButtonClick={showResult} className="equal-button">=</Button>
            </div>
        </section>
    )
}

export default Calculator

const sacarCuenta = (op1, op2, opr) => {
    const op1n = aNumero(op1)
    const op2n = aNumero(op2)
    return (opr === '+')
            ? op1n + op2n
            : (opr === '-')
                ? op1n - op2n
                : (opr === '*')
                    ? op1n * op2n
                    : (opr === '/')
                        ? op1n / op2n
                        : ''
}

const aNumero = (string) => {
    if (string.includes('.')) {
        return parseFloat(string)
    } else {
        return parseInt(string)
    }
}