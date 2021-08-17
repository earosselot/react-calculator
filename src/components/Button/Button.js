
function Button({children, className, handleButtonClick}) {

    const handleOnClick = (e) => {
        handleButtonClick(e.target.innerText)
    }

    return <button onClick={handleOnClick} className={className}>{children}</button>
}

export default Button